import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // Navigates to the root path
  };

  return (
    <div>
      <div>
        <h1>
          Hello
        </h1>
      </div>
      <button onClick={handleClick}>Navigate</button>
    </div>
  );
}

export default MyComponent;