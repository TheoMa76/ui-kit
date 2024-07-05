import React, { useState } from 'react';
import Button from './components/atoms/Buttons/index';
import Input from './components/atoms/Inputs/index';
import Navbar from './components/atoms/Navbar/index';
import Form from './components/atoms/Forms/Form';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const formFields = [
    { name: 'firstName', label: 'Prénom', placeholder: 'Prénom', type: 'text' },
    { name: 'lastName', label: 'Nom de famille', placeholder: 'Nom de famille', type: 'text' },
    { name: 'username', label: "Nom d'utilisateur", placeholder: "Nom d'utilisateur", type: 'text' },
    { name: 'email', label: 'Email', placeholder: 'Email', type: 'email' },
    { name: 'address', label: 'Adresse', placeholder: 'Adresse', type: 'text' },
    { name: 'birthDate', label: 'Date de naissance', placeholder: 'Date de naissance', type: 'date' },
    { name: 'password', label: 'Mot de passe', placeholder: 'Mot de passe', type: 'password' },
    { name: 'confirmPassword', label: 'Confirmer votre mot de passe', placeholder: 'Confirmer votre mot de passe', type: 'password' }
  ];

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  return (
    <>
      <Navbar
          primaryColor="#2B2D42"
          secondaryColor="#8D99AE"
          backgroundColor="#EDF2F4"
          searchPlaceholder="Recherche exemple"
        />
      <div className="p-5 m-20">
        <h1 className="text-2xl mb-4">UI Kit Exemples Boutons</h1>
        <div className="mb-4">
          <Button variant="primary" onClick={() => alert('Primary Button Clicked')} label="Bouton primaire"></Button>
        </div>
        <div className="mb-4">
          <Button variant="secondary" onClick={() => alert('Secondary Button Clicked')} label="Bouton secondaire"></Button>
        </div>
        <div className="mb-4">
          <Button variant="neutral" onClick={() => alert('Link Clicked')} label="Link example"></Button>
        </div>
        <h2 className="text-2xl mb-4">UI Kit Exemple Inputs</h2>
        <div className="mb-4">
        <Input
            variant="primary"
            placeholder="Exemple input"
            value={inputValue}
            onChange={handleInputChange}
            onInput={handleInputChange}
            label = "Exemple input"
            type = "text"
          />
        </div>
      </div>
      <Form formFields={formFields} />

    </>
  );
};

export default App;
