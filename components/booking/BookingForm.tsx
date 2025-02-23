import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.cardNumber || !formData.cvv) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Payment successful! Booking confirmed.");
    }, 2000);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Contact Detail</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="border p-2 w-full mt-2" required />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="border p-2 w-full mt-2" required />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 w-full mt-2" required />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="border p-2 w-full mt-2" />
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-6">Pay with</h2>
        <div className="mt-4">
          <label>Card Number</label>
          <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} className="border p-2 w-full mt-2" required />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Expiration Date</label>
            <input type="text" name="expDate" value={formData.expDate} onChange={handleChange} className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label>CVV</label>
            <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} className="border p-2 w-full mt-2" required />
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
        <div className="mt-4">
          <label>Street Address</label>
          <input type="text" name="street" value={formData.street} onChange={handleChange} className="border p-2 w-full mt-2" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>City</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label>State</label>
            <input type="text" name="state" value={formData.state} onChange={handleChange} className="border p-2 w-full mt-2" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Zip Code</label>
            <input type="text" name="zip" value={formData.zip} onChange={handleChange} className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label>Country</label>
            <input type="text" name="country" value={formData.country} onChange={handleChange} className="border p-2 w-full mt-2" />
          </div>
        </div>

        <button type="submit" disabled={loading} className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full">
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
  
  // In the code above, we have a form that collects user details such as first name, last name, email, phone number, card number, expiration date, CVV, street address, city, state, zip code, and country. 
  // We are using the  useState  hook to manage the form data and loading state. The  handleChange  function updates the form data as the user types in the input fields. The  handleSubmit  function is called when the form is submitted. 
  // In the  handleSubmit  function, we first check if all required fields are filled. If any of the required fields are empty, we set an error message. If all required fields are filled, we set the loading state to true and simulate a payment process with a 2-second delay. 
  // When the payment process is complete, we set the loading state to false and display an alert message to the user. 
  // The form is rendered with input fields for collecting the user details. When the form is submitted, the  handleSubmit  function is called. 
  // Conclusion 
  // In this tutorial, we have learned how to create a form in React using the  useState  hook. We have also learned how to manage form data and loading state in a React component. 
  // The  useState  hook is a powerful tool for managing state in functional components. It allows us to create stateful components without using class components. 
  // If you have any questions or feedback, feel free to leave a comment. 
  // Happy coding! 
  // Peer Review Contributions by:  Lalithnarayan C