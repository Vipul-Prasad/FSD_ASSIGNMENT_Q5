import { useState } from "react";
import "./App.css";

function App() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: ""
    });

    // Update state whenever an input changes
    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleReset() {
        setFormData({
            name: "",
            email: "",
            phone: "",
            course: "",
            message: ""
        });
    }

    return (
        <div className="page-container">
            <header className="page-header">
                <h1>Controlled React Form</h1>
                <p>Enter your details and see the preview instantly.</p>
            </header>

            <div className="form-layout">
                <section className="form-card">
                    <h2>Your Information</h2>
                    <p className="card-subtitle">
                        Fill in the fields below.
                    </p>

                    <form onSubmit={(event) => event.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="course">Course</label>
                            <select
                                id="course"
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                            >
                                <option value="">Select a course</option>
                                <option value="BCA">BCA</option>
                                <option value="MCA">MCA</option>
                                <option value="B.Tech">B.Tech</option>
                                <option value="M.Tech">M.Tech</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">About Yourself</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Write a short description..."
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-actions">
                            <button type="button" onClick={handleReset}>
                                Reset Form
                            </button>
                        </div>
                    </form>
                </section>

                <section className="preview-card">
                    <div className="preview-heading">
                        <div>
                            <h2>Live Preview</h2>
                            <p className="card-subtitle">
                                Your details appear here as you type.
                            </p>
                        </div>
                        <span className="live-badge">LIVE</span>
                    </div>

                    <div className="profile-avatar">
                        {formData.name.trim()
                            ? formData.name.trim().charAt(0).toUpperCase()
                            : "?"}
                    </div>

                    <h3 className="preview-name">
                        {formData.name || "Your Name"}
                    </h3>

                    <p className="preview-course">
                        {formData.course || "Your Course"}
                    </p>

                    <div className="preview-details">
                        <div className="detail-row">
                            <span>Email</span>
                            <p>{formData.email || "Not provided"}</p>
                        </div>

                        <div className="detail-row">
                            <span>Phone</span>
                            <p>{formData.phone || "Not provided"}</p>
                        </div>

                        <div className="detail-row">
                            <span>About</span>
                            <p>{formData.message || "Nothing added yet"}</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;