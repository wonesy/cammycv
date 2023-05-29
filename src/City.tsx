import kaupunkiTop from './assets/kaupunkinettiin-top.png'
import kaupunkiBot from './assets/kaupunkinettiin-bot.png'

export function CityTop() {
    return <div className="city">
        <img src={kaupunkiTop} alt='city'/>
    </div>
}

export function CityBot() {
    return <div className="city">
        <img src={kaupunkiBot} alt='city'/>
    </div>
}