function DropFileInput({
    url,
    drag,
    onDragStart,
    onDragLeave,
    onDragOver,
    onDrop,
    onChangeImg,
}) {
    return (
        <div className="drop-files-container">
            {!url ? (
                <>
                    <div className="label-container">
                        <label>Add image</label>
                    </div>
                    <div className="input-container">
                        {drag ? (
                            <div
                                className="drop-area on-drop"
                                onDragStart={onDragStart}
                                onDragLeave={onDragLeave}
                                onDragOver={onDragOver}
                                onDrop={onDrop}
                            >
                                <p className="hint on-drop">
                                    Drop file to upload
                                </p>
                            </div>
                        ) : (
                            <div
                                className="drop-area"
                                onDragStart={onDragStart}
                                onDragLeave={onDragLeave}
                                onDragOver={onDragOver}
                            >
                                <p className="hint">Move file to upload</p>
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <>
                    <p className="add-img-text">Image has added</p>
                    <button className="add-img-btn" onClick={onChangeImg}>
                        Change image
                    </button>
                </>
            )}
        </div>
    );
}

export default DropFileInput;
