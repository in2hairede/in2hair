
import { useFormik } from 'formik';
import { TextField } from '@mui/material';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const SERVICE_ID = 'service_kuotapt';
const TEMPLATE_ID = 'template_c7gywbq';
const PUBLIC_KEY = 'ht49MooameXg7SqBn';

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const { values, errors, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      captcha: 0,
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Naam is verplicht'),
      email: Yup.string().email('Ongeldig e-mailadres').required('Email is verplicht'),
      message: Yup.string().required('Bericht mag niet leeg zijn'),
    }),
    onSubmit: (values) => {
      setLoading(true);
      emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        to: 'han23.celik@gmail.com',
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      }, PUBLIC_KEY)
        .then(() => {
          alert("✅ Bericht succesvol verzonden!");
          resetForm();
        })
        .catch((error) => {
          console.error('❌ Verzenden mislukt:', error);
          alert("Er ging iets mis. Probeer het later opnieuw!");
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });

  return (
    <section id="contact" className="relative py-10 px-4">
      <form onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-gray-400 p-8 shadow-xl rounded-lg space-y-6"
      >
        <h2 className="text-2xl font-semibold text-gray-700">
          Contactformulier
        </h2>

        <div className='flex gap-4 w-full'>
          {/* naam */}
          <div className='w-1/3 '>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Uw naam"
              value={values.name}
              onChange={handleChange}
              className="form-control"
            />
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
          </div>

          {/* email */}
          <div className='flex-1'>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="uw@email.com"
              value={values.email}
              onChange={handleChange}
              className="form-control"
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* onderwerp */}
        <div>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Onderwerp"
            value={values.subject}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* bericht */}
        <div>
          <TextField
            label="Uw bericht + telefoonnummer"
            id="message"
            name="message"
            multiline
            rows={5}
            placeholder="Typ hier je bericht..."
            fullWidth
            variant="outlined"
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-sm text-red-600 mt-1">{errors.message}</p>
          )}
        </div>

        {/* verstuur button */}
        <div className="text-center">
          <button className={`btn ${loading
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-cgreen'}`}
            type="submit"
            disabled={loading}
          >
            {loading ? 'Verzenden...' : 'Verstuur'}
          </button>
        </div>
      </form>
    </section>
  );
}

