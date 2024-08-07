"use client";
import React, { useState, useEffect } from 'react';

// Async function to fetch translations
const fetchTranslation = async (text, sourceLang, targetLang) => {
const encodedParams = new URLSearchParams();
encodedParams.set('from', sourceLang);
encodedParams.set('to', targetLang);
encodedParams.set('text', text);

const options = {
  method: 'POST',
  url: 'https://google-translate113.p.rapidapi.com/api/v1/translator/text',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '581f7dbaf2msh3ce92dd374619d4p1278d2jsnb3250973c8d8',
    'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	const data=response.data;
  return data.trans;
} catch (error) {
	console.error(error);
}
};

const TranslateText = ({ text, sourceLang = 'en', targetLang = 'es', trigger }) => {
  const [translatedText, setTranslatedText] = useState('');

  const loadTranslation = async () => {
    if (!text) return;
    const translated = await fetchTranslation(text, sourceLang, targetLang);
    setTranslatedText(translated);
  };

  useEffect(() => {
    if (trigger) {
      loadTranslation();
    }
  }, [text, sourceLang, targetLang]);

  return (
    <div>
      <h2 style={{textAlign:"center"}}>Translated Text</h2>
      <br/>
      <hr/>
      <p style={{marginTop:"20px"}}>{translatedText}</p>
    </div>
  );
};

export default TranslateText;
