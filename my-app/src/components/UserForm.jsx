import { useState } from 'react';

const UserForm = ({ onSubmit }) => {
    const [imageFile, setImageFile] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!imageFile) {
            setError("Please upload an image");
            return;
        }
        setError('');
        onSubmit(imageFile);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
            <button type="submit">Analyze</button>
            {error && <p className='button'>{error}</p>}
        </form>
    );
};

export default UserForm;