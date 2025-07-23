import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const RevisitForm = () => {
  const [formData, setFormData] = useState({
    tjanst: 'plan med samtal',
    name: '',
    email: '',
    personnummer: '',
    telefonnummer: ''
  });

  const [painData, setPainData] = useState(null);
  const [errors, setErrors] = useState({});
  const paymentLink = 'https://buy.stripe.com/5kA8wF1Rcd2cbAA5kl'; // Replace with your actual link

  // Load data from localStorage
  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    const savedPainData = JSON.parse(localStorage.getItem('painData'));

    if (savedFormData) {
      setFormData(prev => ({ ...prev, ...savedFormData }));
    }
    if (savedPainData) {
      setPainData(savedPainData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Namn krävs';
    if (!formData.email.trim()) {
      newErrors.email = 'E-post krävs';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ogiltig e-postadress';
    }
    if (!/^\d{6}-\d{4}$/.test(formData.personnummer)) {
      newErrors.personnummer = 'Format ÅÅMMDD-XXXX krävs';
    }
    const phoneDigits = formData.telefonnummer.replace(/\D/g, '');
    if (!phoneDigits || phoneDigits.length < 7) {
      newErrors.telefonnummer = 'Telefonnummer måste ha minst 7 siffror';
    }

    if (!painData || !painData.location) {
      newErrors.location = 'Du måste välja plats i första steget';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const fullData = {
      ...formData,
      ...painData,
      painTypes: painData?.types?.join(', ') || '',
      painAreas: painData?.areas?.join(', ') || '',
    };

    emailjs.send('service_1nb9swg', 'template_ge4696x', fullData, 'wgAk0hmRkusR4CnTE')
      .then(() => {
        localStorage.removeItem('formData');
        localStorage.removeItem('painData');
        window.location.href = paymentLink;
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        alert('Det gick inte att skicka. Försök igen.');
      });
  };

  return (
    <div className="mri-kundinfo">
      <form onSubmit={handleSubmit}>
        <h2 className="header-mri">Kundinformation</h2>

        <label>Namn:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input-field"
        />
        {errors.name && <p className="error-text">{errors.name}</p>}

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        <label>Personnummer (ÅÅMMDD-XXXX):</label>
        <input
          type="text"
          name="personnummer"
          value={formData.personnummer}
          onChange={handleChange}
          className="input-field"
          maxLength="11"
        />
        {errors.personnummer && <p className="error-text">{errors.personnummer}</p>}

        <label>Telefonnummer:</label>
        <input
          type="text"
          name="telefonnummer"
          value={formData.telefonnummer}
          onChange={handleChange}
          className="input-field"
          maxLength="13"
        />
        {errors.telefonnummer && <p className="error-text">{errors.telefonnummer}</p>}

        {/* Pain info preview */}
        {painData && (
          <div className="pain-summary">
            <h3>Smärtinformation</h3>
            <p><strong>Plats för träning:</strong> {painData.location}</p>
            <p><strong>Typ av smärta:</strong> {painData.types?.join(', ')}</p>
            <p><strong>Områden:</strong> {painData.areas?.join(', ')}</p>
            <p><strong>Smärtans varaktighet:</strong> {painData.duration}</p>
            <p><strong>Mediciner:</strong> {painData.mediciner}</p>
            <p><strong>Sjukdomar:</strong> {painData.sjukdomar}</p>
          </div>
        )}

        {errors.location && <p className="error-text">{errors.location}</p>}

        <button type="submit" className="submit-button">Skicka & Betala</button>
      </form>
    </div>
  );
};

export default RevisitForm;