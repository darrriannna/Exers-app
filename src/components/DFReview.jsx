import React, { useState } from 'react';
import '../styles/index.css';
import { useNavigate } from 'react-router-dom';

const painTypes = ['Molande', 'Stickande', 'Skärande', 'Brännande', 'Tryckande'];
const painAreas = ['Huvud', 'Nacke', 'Axlar', 'Rygg', 'Bröst', 'Mage', 'Armar', 'Ben', 'Händer', 'Fötter', 'Leder'];
const durations = ['Mindre än 1 månad', '1–2 månader', '3–6 månader', '1 år', 'Mer än 1 år'];

const DynamicFormReview = () => {
  const [location, setLocation] = useState(() => localStorage.getItem('location') || '');
  const [selectedPainTypes, setSelectedPainTypes] = useState([]);
  const [selectedPainAreas, setSelectedPainAreas] = useState([]);
  const [selectedDuration, setSelectedDuration] = useState('');
  const [mediciner, setMediciner] = useState('');
  const [sjukdomar, setSjukdomar] = useState('');
  const navigate = useNavigate();

  const toggleSelection = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const painData = {
      location,
      types: selectedPainTypes,
      areas: selectedPainAreas,
      duration: selectedDuration,
      mediciner,
      sjukdomar
    };

    localStorage.setItem('painData', JSON.stringify(painData));
    localStorage.setItem('location', location); // optional backup

    navigate('/bestalla-uppfojlning');
  };

  return (
    <div className='wrapper-df'>
      <div className="pain-form-container">
        <h2 className="form-title">Beskriv din smärta</h2>
        <form onSubmit={handleSubmit}>
          
          {/* Location */}
          <div className="form-group">
            <label>Var vill du göra dina övningar?</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="location"
                  value="Hem"
                  checked={location === 'Hem'}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
                Hemma
              </label>
              <label>
                <input
                  type="radio"
                  name="location"
                  value="Gym"
                  checked={location === 'Gym'}
                  onChange={(e) => setLocation(e.target.value)}
                />
                På gymmet
              </label>
              <label>
                <input
                  type="radio"
                  name="location"
                  value="Både"
                  checked={location === 'Både'}
                  onChange={(e) => setLocation(e.target.value)}
                />
                Både hemma och gym
              </label>
            </div>
          </div>

          {/* Pain Types */}
          <div className="form-group">
            <label>Typ av smärta:</label>
            <div className="multi-select">
              {painTypes.map(type => (
                <button
                  type="button"
                  key={type}
                  className={`option-btn ${selectedPainTypes.includes(type) ? 'selected' : ''}`}
                  onClick={() => toggleSelection(type, selectedPainTypes, setSelectedPainTypes)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Pain Areas */}
          <div className="form-group">
            <label>Var känner du smärta?</label>
            <div className="multi-select">
              {painAreas.map(area => (
                <button
                  type="button"
                  key={area}
                  className={`option-btn ${selectedPainAreas.includes(area) ? 'selected' : ''}`}
                  onClick={() => toggleSelection(area, selectedPainAreas, setSelectedPainAreas)}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          {/* Pain Duration */}
          <div className="form-group">
            <label>Hur länge har du haft smärta?</label>
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              required
            >
              <option value="">Välj tidsperiod</option>
              {durations.map(duration => (
                <option key={duration} value={duration}>{duration}</option>
              ))}
            </select>
          </div>

          {/* Mediciner */}
          <div className="form-group">
            <label>Tar du några mediciner?</label>
            <textarea
              className="textarea-field"
              value={mediciner}
              onChange={(e) => setMediciner(e.target.value)}
              placeholder="Skriv dina mediciner här..."
            />
          </div>

          {/* Sjukdomar */}
          <div className="form-group">
            <label>Har du några sjukdomar?</label>
            <textarea
              className="textarea-field"
              value={sjukdomar}
              onChange={(e) => setSjukdomar(e.target.value)}
              placeholder="Skriv sjukdomar här..."
            />
          </div>

          <button type="submit" className="submit-btn">Fortsätta</button>
        </form>
      </div>
    </div>
  );
};

export default DynamicFormReview;







