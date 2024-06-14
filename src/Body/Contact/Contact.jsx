import { useFormData } from 'herotofu-react';
import Button from "react-bootstrap/Button";

const Contact = () => {

  const { formState, getFormSubmitHandler } = useFormData('https://herotofu.com/start');

  return (
    <>

      {!!formState.status && <div className="py-2">Current status : {formState.status == 'not_initialized'? 'Fill the form' : formState.status}
      </div>}
      <form onSubmit={getFormSubmitHandler()}>
        <div className="pt-0 mb-3">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <input
            type="text"
            placeholder="Your Surname"
            name="name"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <textarea
            placeholder="Your message"
            name="message"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            required
          />
        </div>
        <div className="pt-0 mb-3">
        
          <Button variant="primary" type="submit" className="w-30">
               Send a message
          </Button>
        </div>
      </form>
    </>
  );
};



export default Contact;
