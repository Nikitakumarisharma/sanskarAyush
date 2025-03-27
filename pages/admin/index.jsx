import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/src/firebase/config'; // Make sure storage is exported from firebase.js

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    packing: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = '';

      // First upload the image if one is selected
      if (imageFile) {
        // Create a reference to the storage location
        const storageRef = ref(storage, `products/${Date.now()}_${imageFile.name}`);
        
        // Upload the file
        const snapshot = await uploadBytes(storageRef, imageFile);
        
        // Get the download URL
        imageUrl = await getDownloadURL(snapshot.ref);
        console.log('Image uploaded, URL:', imageUrl); // Debug log
      }

      // Then create the product document
      const productData = {
        name: formData.name,
        category: formData.category,
        packing: formData.packing,
        image: imageUrl, // Add the image URL
        createdAt: new Date().toISOString()
      };

      console.log('Saving product data:', productData); // Debug log

      // Add to Firestore
      const docRef = await addDoc(collection(db, 'products'), productData);
      console.log('Document written with ID:', docRef.id); // Debug log

      // Reset form
      setFormData({
        name: '',
        category: '',
        packing: ''
      });
      setImageFile(null);
      
      // Reset file input
      if (document.getElementById('imageInput')) {
        document.getElementById('imageInput').value = '';
      }

      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Other form fields */}
      
      <div className="mb-3">
        <label className="form-label">Image</label>
        <input
          id="imageInput"
          type="file"
          className="form-control"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
      </div>

      <button 
        type="submit" 
        className="btn btn-primary"
        disabled={loading}
      >
        {loading ? 'Adding Product...' : 'Add Product'}
      </button>
    </form>
  );
};

export default AddProduct;