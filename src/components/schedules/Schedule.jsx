import React from 'react';
//import moment from 'moment';


const Schedule = ({schedule, index}) => {

    const {
        dateDay,
        hourInit,
        hourEnd,
        status
    } = schedule;

    const dateTo = dateDay.split('/');

    const today = new Date();
    // const dayInit = new Date(`${dateTo[2]}/${dateTo[1]}/${dateTo[0]} ${hourInit}`);
    // const dayEnd = new Date(`${dateTo[2]}/${dateTo[1]}/${dateTo[0]} ${hourEnd}`);
    // const tempInit = dayInit.getTime() - today.getTime();
    // const tempEnd = dayEnd.getTime() - today.getTime();
    // //const daytime = moment.duration(tempInit);
    // const daytime = new Date(tempInit).getTime();
    // const hourTime = `Falta ${daytime.hours()} horas con ${daytime.minutes() + 1} minutos`;

    const classStatus = status === 'activo' ? 'alert-success' : 'alert-danger';

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{dateDay}</td>
            <td>{hourInit}</td>
            <td>{hourEnd}</td>
            <td>
                <span className={`alert ${classStatus} py-1 px-2`}>{status}</span>
            </td>
            <td>
                Asu
            {/* {
            tempInit > 0
            ? <span className="alert alert-success py-1 px-2 ml-2">{hourTime || 'zzzzzz'}</span>
            : tempEnd < 0
                ? <span className="alert alert-info py-1 px-2 ml-2">Ya cumplió su horario</span>
                : <span className="alert alert-warning py-1 px-2 ml-2">En transcurso...</span>
            } */}
            </td>
        </tr>
    );
}
 
export default Schedule;