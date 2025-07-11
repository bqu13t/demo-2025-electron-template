import { useEffect } from 'react';
import { Link } from 'react-router';

export default function CreatePartner() {
  useEffect(() => {
    document.title = 'Создать ';
  }, []);
  async function submitHandler(e) {
    e.preventDefault();
    const partner = {
      type: e.target.type.value,
      name: e.target.name.value,
      ceo: e.target.ceo.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      rating: e.target.rating.value,
    };
    await window.api.createPartner(partner);
    document.querySelector('form').reset();
  }

  return (
    <div className='form'>
      <Link to={'/'}>
        <button>{'<-- Назад'}</button>
      </Link>

      <h1>Создать партнера</h1>
      <form onSubmit={(e) => submitHandler(e)}>
        <label htmlFor='name'>Наименование:</label>
        <input id='name' type='text' required />
        <label htmlFor='type'>Тип :</label>
        <select name='' id='type' required>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </select>
        <label htmlFor='rating'>Рейтинг:</label>
        <input id='rating' type='number' step='1' min='0' max='100' required />
        <label htmlFor='address'>Адрес:</label>
        <input id='address' type='text' required />
        <label htmlFor='ceo'>ФИО:</label>
        <input id='ceo' type='text' required />
        <label htmlFor='phone'>Телефон:</label>
        <input id='phone' type='tel' required />
        <label htmlFor='email'>Email:</label>
        <input id='email' type='email' required />
        <button type='submit'>Создать </button>
      </form>
    </div>
  );
}
