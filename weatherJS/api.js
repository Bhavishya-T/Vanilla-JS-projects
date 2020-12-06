class weather{
    constructor(){
        this.key = "7523e5365fmsh2313c4f4d238723p168f7fjsnc4ea12119088",
		this.host = "community-open-weather-map.p.rapidapi.com"
    }
    
    async getdata(location){
        const response = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=Hyderabad&units=metric`, {
            method: "GET",
            headers: {
                "x-rapidapi-key": `${this.key}`,
                "x-rapidapi-host": `${this.host}`
            }
        });
        const locate = await response.json();
        return locate
    }
}