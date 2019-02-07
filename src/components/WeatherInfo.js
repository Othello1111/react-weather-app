import React from 'react';
import moment from 'moment';

const WeatherInfo = (props) => {
    debugger
    return (
        <div className="weather-info-wrapper">
            {props.error && <div className="error-message"> {props.error}</div>}
            {props.temperature &&
                <div>
                    <div className="weather-info__temperature">
                        {props.temperature} &deg;
                    </div>
                  
                    <div className="weather-info__description">
                        <div>
                            <div> Humidity </div>
                            <div> {props.humidity} </div>
                        </div>
                        <div>
                            <div> Min </div>
                            <div> {props.minTemp} &deg; </div>
                        </div>
                        <div>
                            <div> Max </div>
                            <div>{props.maxTemp} &deg; </div>
                        </div>
                        <div>
                            <div> Description </div>
                            <div>
                               {props.description}
                            </div>
                        </div>
                        <div>
                        <img className="weather-info__icon" src = {`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather_icon"/>
                        </div>
                    </div>
                </div>
              
            }
        </div>
    )
}

export default WeatherInfo;

// <div className="weather-info__location">
// {props.city}, {props.country}  {moment(props.today).format('h:mm a')}
// </div>