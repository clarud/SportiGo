import { useState, useEffect } from "react";
import axios from "axios";

export default function UpdateProfile() {
    const [formData, setFormData] = useState({
        skillLevel: "",
        preferredSport: "",
        status: "",
    });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get("/profile", {
                    withCredentials: true,
                });
                const { skillLevel, preferredSport, status } = response.data;
                setFormData({ skillLevel, preferredSport, status });
            } catch (error) {
                console.error("Error fetching profile:", error.response?.data || error.message);
            }
        };

        fetchProfile();
    }, []);

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
        } catch (error) {
            console.error("Error updating profile:", error.response?.data || error.message);
        }
    };

    return (
        <div>
            <h1>Update Profile</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Skill Level:
                    <select name="skillLevel" value={formData.skillLevel} onChange={handleChange}>
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
                        <option value="Available">Available</option>
                        <option value="Busy">Busy</option>
                    </select>
                </label>
                <br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}
