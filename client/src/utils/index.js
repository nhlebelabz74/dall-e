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
    // Fetch the image as a Blob
    const response = await axios.get(url, {
      responseType: 'blob', // Important for downloading binary data
    });

    // Save the file using FileSaver
    FileSaver.saveAs(response.data, `download-${id}.png`);
  } catch (error) {
    console.error('Error downloading image:', error);
  }
};

export { 
  getRandomPrompt,
  downloadImage
};