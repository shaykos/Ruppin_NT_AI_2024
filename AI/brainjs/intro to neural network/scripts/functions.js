import { data } from './global';

export function createData(obj) {
    data.push(obj);
    console.log(data)
}

export function generateColor() {
    return {
        r: Math.random() * 255,
        g: Math.random() * 255,
        b: Math.random() * 255
    }
}

export function showColor(clr) {
    let color = document.querySelector("#color");
    color.style.backgroundColor = `rgb(${clr.r}, ${clr.g}, ${clr.b})`;
}


/**

input
: 
{r: 9.10477596615205, g: 68.61219208187455, b: 140.54116631536058}
output
: 
{brightness: 0.5, darkness: 0.5}



input
: 
{r: 216.96501566020876, g: 167.5007572109443, b: 55.547677273415005}
output
: 
{brightness: 0.5, darkness: 0.5}



input
: 
{r: 35.07329560873376, g: 187.26087324030968, b: 207.41187902255865}
output
: 
{brightness: 1, darkness: 0}



input
: 
{r: 213.87026950191142, g: 105.96969944309929, b: 133.1767198052479}
output
: 
{brightness: 1, darkness: 0}



input
: 
{r: 227.29963980097216, g: 133.94223225749332, b: 128.82858767312257}
output
: 
{brightness: 1, darkness: 0}



input
: 
{r: 221.89106488513428, g: 216.40503100333999, b: 208.44942259030066}
output
: 
{brightness: 1, darkness: 0}


 
input
: 
{r: 172.9896587179723, g: 167.5508489634244, b: 4.66885521292383}
output
: 
{brightness: 0.5, darkness: 0.5}



input
: 
{r: 131.18097448039626, g: 132.46496604280085, b: 122.77583462922348}
output
: 
{brightness: 1, darkness: 0}



input
: 
{r: 29.07016941156774, g: 112.29668411409813, b: 51.03136411785202}
output
: 
{darkness: 1, brightness: 0}



input
: 
{r: 236.81334537822812, g: 34.619242703236075, b: 204.03677030229753}
output
: 
{brightness: 1, darkness: 0}



input
: 
{r: 92.99279613497251, g: 46.22572793338086, b: 119.34311508722261}
output
: 
{darkness: 1, brightness: 0}



input
: 
{r: 63.894790459909885, g: 73.4968567659647, b: 156.6926655838135}
output
: 
{darkness: 1, brightness: 0}



input
: 
{r: 39.022050227601426, g: 44.75131094123828, b: 215.46937832159995}
output
: 
{brightness: 0.5, darkness: 0.5}



input
: 
{r: 95.63362040124832, g: 216.41843220095694, b: 49.64073491620471}
output
: 
{brightness: 1, darkness: 0}



input
: 
{r: 8.081372222246655, g: 245.06358826145546, b: 162.96575762451855}
output
: 
{darkness: 1, brightness: 0}


input
: 
{r: 164.35625728028683, g: 29.841838756660607, b: 184.65303737857187}
output
: 
{brightness: 1, darkness: 0}



input
: 
{r: 146.61216026662433, g: 213.08140929326842, b: 148.42702221291262}
output
: 
{brightness: 1, darkness: 0}



input
: 
{r: 189.14330149306952, g: 46.74028945276474, b: 12.293544856124603}
output
: 
{brightness: 1, darkness: 0}


input
: 
{r: 227.14675818934728, g: 226.575732959959, b: 135.80558092643545}
output
: 
{brightness: 1, darkness: 0}



input
: 
{r: 185.2874455837358, g: 122.33070520395766, b: 132.17093029267343}
output
: 
{brightness: 1, darkness: 0}




 */