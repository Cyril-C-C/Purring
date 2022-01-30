import React from 'react';

const AddBtn = () => {
  return (
    <section className='fixed-action-btn'>
      <a
        href='#add-log-modal'
        className='btn-floating btn-large red modal-trigger'
      >
        <i className='large material-icons'>
        <i class="material-icons">more_vert</i>
        </i>
      </a>
      <ul>
        <li>
          <a
            href='#tech-list-modal'
            className='btn-floating grey modal-trigger'
          >
            <i className='material-icons'>mail</i>
          </a>
        </li>
        <li>
          <a
            href='#add-tech-modal'
            className='btn-floating black modal-trigger'
          >
            <i className='material-icons'>phone</i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default AddBtn;
