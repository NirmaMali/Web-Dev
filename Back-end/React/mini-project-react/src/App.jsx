
// import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

function App() {
   let handleClick = () => {
      console.log('Button Clicked!');
    };

  return (
   
    <>
      <h1>Material UI Demo</h1>
     <Button variant="text" onClick={handleClick}>
        Text
      </Button>
      <Button variant="contained" onClick={handleClick}>
        Contained
      </Button>
      <Button variant="outlined" onClick={handleClick} size='small'>
        Outlined
      </Button>
      <Button disabled>Disabled</Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button>
<Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
    </>
  )
}

export default App
