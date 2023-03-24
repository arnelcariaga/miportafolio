function Header({ devTxtRef }) {
    return (
        <div className="vh-100 d-flex align-items-center text-center">
            <div>
                <h1 className="display-1 fw-bold">Hola,</h1>
                <span>
                    <h1 className="display-1 fw-bold">Mi nombre es Arnel Cariaga, Soy <span className="dev-txt text-info" ref={devTxtRef}>Programador</span>
                    {" "}
                        <span className='web-txt d-inline-block'>Web</span> & <span className='mobile-txt d-inline-block'>Mobile.</span>
                    </h1>
                </span>
                <figcaption className="blockquote-footer pt-5 w-50 mx-auto">
                <span className='fs-5'>Aplicaciones mobiles y web con la mas alta calidad y diseño que se adapta a tus necesidades.</span>
            </figcaption>
            </div>
        </div>
    )
}

export default Header