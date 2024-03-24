import './course_ir_card.css'

function Course_IR_Card({ title, content}) {
    return(

        <div className='course_ir_card'>
            <h1 className='course_ir_card_title'>{title}</h1>
            <p className='course_ir_card_text'>{content}</p>
        </div>

    );

}

export default Course_IR_Card;