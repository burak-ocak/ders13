
//Projeye fontawesome kütüphanesini eklemek istedik, aşağıdaki kodları yazmadan önce terminal'de yeni powershell oluşturup öncelikle npm install @fonrtawesome/fontawesome-free 'yi çalıştırmamız
//gerekir. Bu örnek fontawesome içindi, bunu farklı kütüphaneler için de kullanabiliriz.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faTextHeight, faVenusMars, faWeightScale } from "@fortawesome/free-solid-svg-icons";

function Karakter({ person }) {

    return (
        <>
            <div className="col-md-6">
                <h1>{person.name}</h1>
                <p><FontAwesomeIcon icon={faBirthdayCake} /> Birth Year: {person.birth_year}</p>
                <p><FontAwesomeIcon icon={faVenusMars} /> Gender: {person.gender}</p>
                <p><FontAwesomeIcon icon={faTextHeight} /> Height: {person.height}</p>
                <p><FontAwesomeIcon icon={faWeightScale} /> Mass: {person.mass}</p>
            </div>
        </>
    );
};

export default Karakter;