//import { collection, getDocs } from "firebase/firestore";
//import { db } from "../firebase";

class Config {
    venueEmail: string = "";
    venue: string = "Gorwell Farm";
    venueWebsite: string = "https://www.gorwellfarm.co.uk";
    date: string = "Saturday 6th May 2023";
    groom: string = "Chris";
    venueAddress: string = "Gorwell Farm, Abbotsbury, Weymouth, DT3 4JX";
    map: string = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJp9wv08hfckgRwEhnO0vKtxY&maptype=satellite&zoom=13";
    directionsBridport: string = "<ul> <li> From Bridport take the A35 towards Dorchester. </li> <li> On reaching the village of Winterbourne Abbas turn right opposite the garage on the left signposted to Martinstown, Portesham and Abbotsbury. </li> <li> At the end of this very short road turn right and then immediately left. </li> <li> Continue along this road for 2 miles and take the second right signposted Gorwell. </li> <li> Continue along this road for a mile and then take the first turning on the right at a small grass triangle. </li> <li> When you are on this road continue over the cattle grid and on for one mile past the dairy and through the wood. <br /> The first building you will see on the right is the barn with a car parking area in front of the building. </li> <li> There will be signposts to the wedding as you get closer. </li> </ul>";
    directionsDorch: string = "<ul> <li> From Dorchester take the A35 towards Bridport. </li> <li> As you are about to enter the village of Winterbourne Abbas take the small road to the left signposted towards Abbotsbury. </li> <li> At the end of this very short road turn right and then immediately left. </li> <li> Continue along this road for 2 miles and take the second right signposted Gorwell. </li> <li> Continue along this road for a mile and then take the first turning on the right at a small grass triangle. </li> <li> When you are on this road continue over the cattle grid and on for one mile past the dairy and through the wood. <br /> The first building you will see on the right is the barn with a car parking area in front of the building. </li> <li> There will be signposts to the wedding as you get closer. </li> </ul>";
    directionsWeymouth: string = "<ul> <li> From Weymouth take the B3157 towards Portesham, Abbotsbury, and Bridport. </li> <li> In Portesham village turn right at the Kings Arms into the main village. </li> <li> Continue through the village and up the hill towards Winterbourne Abbas. </li> <li> After leaving the village at the top of the hill take the first left turn signposted to Gorwell. </li> <li> Continue along this road for a mile and then take the first turning on the right at a small grass triangle. </li> <li> When you are on this road continue over the cattle grid and on for one mile past the dairy and through the wood. <br /> The first building you will see on the right is the barn with a car parking area in front of the building. </li> <li> There will be signposts to the wedding as you get closer. </li> </ul>";
    bride: string = "Issy";
    donationKey: string = "";
}

export const readConfig = async () => {
    let appConfig = new Config();
    
    /*
    const querySnapshot = await getDocs(collection(db, "config"));
    querySnapshot.forEach((doc) => {
        Object.assign(appConfig, doc.data());
    });
    */
    
    return appConfig;
}
