const About = () => {
    return (
        <div className="container-fluid p-0 m-0" style={{ overflowX: 'hidden' }}>
            {[
                "https://eg.jumia.is/cms/external/cms/all_about_jumia_ar_EG/6d90728405f255a173d0551ecce1ba28_ad35ffbb4c26fd20acf241783af49007fb289d9e.jpg",
                "https://eg.jumia.is/cms/external/cms/all_about_jumia_ar_EG/6d90728405f255a173d0551ecce1ba28_6b7c795640b16810004d70ca3991efffcbf7278a.jpg",
                "https://eg.jumia.is/cms/external/cms/all_about_jumia_ar_EG/6d90728405f255a173d0551ecce1ba28_b043aff51229a873e920a66eaac5be52665e9739.jpg",
                "https://eg.jumia.is/cms/external/cms/all_about_jumia_ar_EG/6d90728405f255a173d0551ecce1ba28_31d83c5f86911c06178c0751b2be45322d5ca624.jpg",
                "https://eg.jumia.is/cms/external/cms/all_about_jumia_ar_EG/4618a7018fe60a8dd3ca6209e778d73b_ca38b00e9072f77063b7b45a1470e76664c704aa.jpg"
            ].map((src, idx) => (
                <img
                    key={idx}
                    src={src}
                    alt='aboutJumai'
                    className="img-fluid d-block w-100"
                    style={{
                        height: 'auto',
                        objectFit: 'cover',
                        margin: 0,
                        padding: 0,
                    }}
                />
            ))}
        </div>
    );
};

export default About;
