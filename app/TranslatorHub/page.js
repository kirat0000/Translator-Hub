"use client";
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Header from './components/header';
import Footer from './components/footer';
import Layout from './components/layout';
import styled , {css} from 'styled-components';
import 'tailwindcss/tailwind.css';
import TranslateText from './components/translate-text'; 
import About from './components/About';
import 'tailwindcss/tailwind.css';


const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 100px;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url('./background.jpg');  
  background-size: cover; 
  background-position: center;  
  background-repeat: no-repeat;
`;

const Section = styled.div`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 24px;
  border: 2px solid grey;
  background-color: rgba(255, 255, 255, 0.8); 
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  &:hover {
    box-shadow: 0 6px 10px rgba(0,0,0,0.15);
  }
`;


const TextArea = styled.textarea`
  width: 100%;
  height: 50vh;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid grey;
  font-size: 16px;
  background-color: white;
  resize: none;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
`;


const Button = styled.button`
  padding: 12px 24px;
  color: white;
  background-color: slateblue;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  &:hover {
    background-color: blue;
  }
`;

const Input = styled.input`
  border: 2px solid ;
  padding: 8px;
  border-radius: 8px;
  width: auto;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: slategrey;
    outline: none;
  }
`;

const languages = [
  { iso: "EN", name: "English" },
  { iso: "PA", name: "Punjabi" },
  { iso: "ES", name: "Spanish" },
  { iso: "FR", name: "French" },
  { iso: "DE", name: "German" },
  { iso: "HI", name: "Hindi" },
  { iso: "IT", name: "Italian" },
  { iso: "RU", name: "Russian" },
  { iso: "JA", name: "Japanese" },
  { iso: "CN", name: "Chinese" },
  { iso: "UR", name: "Urdu" },
  { iso: "TA", name: "Tamil" },
  { iso: "VI", name: "Vietnamese" },
  { iso: "ID", name: "Indonesian" },
  { iso: "KO", name: "Korean" },
  { iso: "AR", name: "Arabic" },
  { iso: "PT", name: "Portuguese" },
  { iso: "NL", name: "Dutch" },
  { iso: "SV", name: "Swedish" },
  { iso: "DA", name: "Danish" },
  { iso: "FI", name: "Finnish" },
  { iso: "HE", name: "Hebrew" },
  { iso: "TR", name: "Turkish" },
  { iso: "PL", name: "Polish" },
  { iso: "CS", name: "Czech" },
  { iso: "HU", name: "Hungarian" },
  { iso: "EL", name: "Greek" },
  { iso: "TH", name: "Thai" },  
];

function Page() {
  const [text, setText] = useState('');
  const [textOp, setTextOp] = useState('');
  const translateButtonRef = useRef(null);
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');
  const [translation, setTranslation] = useState('');

  const handleTranslation = async () => {
    setTextOp(text);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4 mt-5">Text Translator</h1>
        <Container>
          <Section>
            <TextArea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text here..."
            />
            <div className="flex justify-between my-4">
              <div>
                <label className="mr-2">Source Language:</label>
                <select
                  value={sourceLang}
                  onChange={(e) => setSourceLang(e.target.value)}
                  className="border rounded px-2"
                >
                  {languages.map(lang => (
                    <option key={lang.iso} value={lang.iso}>{lang.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mr-2">Target Language:</label>
                <select
                  value={targetLang}
                  onChange={(e) => setTargetLang(e.target.value)}
                  className="border rounded px-2"
                >
                  {languages.map(lang => (
                    <option key={lang.iso} value={lang.iso}>{lang.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <Button
              ref={translateButtonRef}
              onClick={handleTranslation}
              className="w-full mt-4"
            >Translate</Button>
          </Section>
          <Section>
            <TranslateText text={textOp} sourceLang={sourceLang} targetLang={targetLang} trigger={handleTranslation} />
          </Section>
  
        </Container>
     </div>
    </Layout>
  );
}

export default Page;
