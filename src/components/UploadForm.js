import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

export default function UploadForm() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/jpeg', 'image/png'];

    const handleChange = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) { setFile(selected); setError(''); }
        else { setFile(null); setError('Please select correct type of image (jpg or png)'); }
    }

    return (
        <form>
            <div className="upload-section">
                <label>
                    <input type="file" onChange={handleChange} />
                    <span>+</span>
                </label>
            </div>

            <div className="output">
                { error && <h3 className="error">{error}</h3>}
                { file && <h3 className="file-name" >{file.name}</h3>}
                { file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}
