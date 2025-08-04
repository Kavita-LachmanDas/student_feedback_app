import userModel from "../model/authModel.js";

export const getProfile = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id).select('-password'); // exclude password
    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};



export const updateProfile = async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found!" });
    }

    // Update text fields
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    // If file uploaded, set image path
  if (req.file) {
  user.image = `uploads/${req.file.filename}`;
}

    await user.save();

    res.status(200).json({ success: true, message: "Profile updated successfully!", user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating profile", error: error.message });
  }
};



export const deleteProfile = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error: error.message });
  }
};


