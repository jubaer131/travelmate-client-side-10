
import { useEffect, useState } from "react";
import Card44 from '../pages/Card44'

const Card4 = () => {

    const [ban, setban] = useState([])

    useEffect(() => {

        fetch('https://travel-mate-server-kappa.vercel.app/tour')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const info = data.filter(item => item.country === 'Indonesia')
                setban(info)

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {
                ban.map(data => <Card44 data={data}></Card44>)
            }
        </div>
    );
};

export default Card4;
