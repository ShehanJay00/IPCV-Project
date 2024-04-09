import BodyData from "./bodyData";
import "./bodyStyles.css";

import dry1 from "../assets/dry1.jpg.webp";
import dry2 from "../assets/dry2.jpg";

import normal1 from "../assets/Normal1.jpg";
import normal2 from "../assets/Normal2.jpg";

import oily1 from "../assets/oily1.jpg";
import oily2 from "../assets/oily2.jpg";

import acne1 from "../assets/acne1.webp";
import acne2 from "../assets/acne2.webp";


const Body = () => {
    return(
        <div className="body">
            <h1>TYPES OF SKINS</h1>
            <p>Understanding your skin is the first step towards a healthier, happier complexion. Just like people, skin comes in different types, each with its own needs and quirks. Whether your skin is dry, normal, oily, or prone to acne, knowing its type can help you choose the right products and care routine. Let's explore the characteristics of each skin type through the main types of skin: Dry, Normal, Oily, and Acne-Prone. so you can give your skin the love and attention it deserves.</p> 

            <BodyData
                className = "dry-section"
                heading = "Dry and Dehydrated Skin"
                text = "Dry skin is characterized by a lack of natural moisture and oil production. This can result in a tight and sometimes flaky or dull complexion.Proper care for dry skin involves replenishing moisture and providing nourishment to restore the skin's natural balance. Using gentle cleansers and moisturizers specifically formulated for dry skin can help soothe and hydrate the skin.Some key points to keep in mind for dry skin is dry skin lacks natural moisture and oil production.This can result in a tight and sometimes flaky or dull complexion. Dry skin feels tight and rough because it doesn't have enough moisture. After washing, it can feel even more uncomfortable. You might notice your skin looks flaky and dull, almost like it's thirsty for water."
                img1 = {dry1}
                img2 = {dry2}
            />

            <BodyData
                className = "normal-section"
                heading = "Healthy and Normal Skin"
                text = "Normal skin is often considered the ideal skin type, as it is well-balanced and not overly oily or dry.It has a smooth texture, even tone, and few visible imperfections.Proper care for normal skin involves maintaining its natural balance and protecting it from environmental factors. Using a gentle cleanser to remove impurities and a moisturizer to keep the skin hydrated is essential for normal skin types. not too oily and not too dry, just right in the middle. It feels comfortable and balanced, neither too tight nor too greasy, even after washing. Your skin looks smooth and clear, with no rough patches or shiny spots. It's like your skin has found its perfect rhythm, staying hydrated without being overloaded. Breakouts are rare, and your skin rarely gets irritated. Normal skin feels happy and healthy, just as it should."
                img1 = {normal1}
                img2 = {normal2}
            />

            <BodyData
                className = "dry-section"
                heading = "Oily Skin"
                text =  "Oily skin is characterized by excess sebum production, which can result in a shiny appearance and enlarged pores. Proper care for oily skin involves controlling oil production, balancing the skin's pH levels, and preventing clogged pores. Using a gentle cleanser specifically formulated for oily skin can help remove excess oil and unclog pores.Some key points to keep in mind for oily skin is that is characterized by excess sebum production, resulting in a shiny appearance and enlarged pores. Oily skin is like having a built-in oil factory on your face. It's shiny and greasy, especially around the forehead, nose, and chin. After washing, it feels like it doesn't take long before the shine comes back. Your pores might look bigger, almost like they're on display. Sometimes, your skin can feel thick or coarse, like there's too much going on underneath."
                img1 = {oily1}
                img2 = {oily2}
            />

            <BodyData
                className = "normal-section"
                heading = "Acne Prone Skin"
                text = "Acne-prone skin is prone to frequent breakouts, blackheads, and inflammation due to excess oil production and clogged pores.Proper care for acne-prone skin involves controlling oil production, reducing inflammation, and preventing clogged pores. Using gentle cleansers and non-comedogenic products can help keep the pores clear and minimize acne breakouts. The intake of essential nutrients in the daily diet is extremely important for the biological processes taking place in both young and ageing skin . The intake of essential nutrients in the daily diet is extremely important for the biological processes taking place in both young and aging skin.Your skin might feel inflamed and red around these blemishes, almost like it's having a protest. Sometimes, it's oily, sometimes it's dry, making it hard to predict what's next. You might notice scars or dark spots left behind from previous battles with acne."              
                img1 = {acne1}
                img2 = {acne2}
            />
        </div>
    );
};
export default Body;