import PropTypes from 'prop-types';

export default function AccordionItem({ title, content, id, target }) {
  return (
    <div className='Accordion-item'>
      <h2 className='accordion-header' id={id}>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target={`#${target}`} aria-expanded='false' aria-controls={target}>
          {title}
        </button>
      </h2>
      <div id={target} className='accordion-collapse collapse' aria-labelledby={id} data-bs-parent='#accordionExample'>
        <div className='accordion-body'>{content}</div>
      </div>
    </div>
  );
}

AccordionItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string,
  target: PropTypes.string,
};
