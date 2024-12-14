import { surpriseMePrompts } from '../constants'
import FileSaver from 'file-saver';
import axios from 'axios';

const getRandomPrompt = (prompt) => {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  return randomPrompt === prompt ? getRandomPrompt(prompt) : randomPrompt;
};

const downloadImage = async ({ id, url }) => {
  try {
    console.log('Attempting to download from URL:', url);

    const response = await axios.get(url, {
      responseType: 'blob', // For downloading binary data
    });

    FileSaver.saveAs(response.data, `download-${id}.png`);
    console.log('Image downloaded successfully');
  } catch (error) {
    console.error('Error downloading image:', error.message || error);
  }
};

export { 
  getRandomPrompt,
  downloadImage
};