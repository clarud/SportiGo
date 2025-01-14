import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateProfile() {
    const [formData, setFormData] = useState({
        skillLevel: "",
        preferredSport: "",
        status: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put("/update-profile", formData, {
                withCredentials: true,
            });
            alert("Profile updated successfully!");
            console.log(response.data);
            navigate("/dashboard"); // Redirect to the dashboard after updating
        } catch (error) {
            console.error("Error updating profile:", error.response?.data || error.message);
        }
    };

    return (
        <div>
            <h1>Create Profile</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Skill Level:
                    <select name="skillLevel" value={formData.skillLevel} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </label>
                <br />
                <label>
                    Preferred Sport:
                    <input
                        type="text"
                        name="preferredSport"
                        value={formData.preferredSport}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Status:
                    <select name="status" value={formData.status} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Available">Available</option>
                        <option value="Busy">Busy</option>
                    </select>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
