
const text = `Meow~ Hey Kanishka!
Okay listen… Omkar was sick, like proper-dramatic-hero sick. He almost declared himself a tragic love story. But THEN—you came in with that magical fruit basket!
I’ve never seen someone recover so fast from one bite of a kiwi and a sprinkle of your care. Honestly, doctors are shaking.

He told me (with stars in his eyes) to tell you:
He’s now officially a slave to your love. Not the sad kind—more like the “Will dance for your smile” kind. He’s even thinking of getting a T-shirt printed that says: "Property of Kanishka, handle with hugs."

Now, I heard you might be a little upset…
So here’s what we’ll do:
I’ll bring the cuteness, he’ll bring the apologies, and together we’ll make you laugh so much, your mood will go from “hmm” to “hehe” in 0.2 seconds.

Omkar says you deserve everything—sunshine, cupcakes, peaceful naps, and all the cuddles in the world. But for now, he’s sending you this letter and a virtual forehead kiss (blush included).

Stay amazing, my lovely Kanishka. You’re his whole universe—and I fully approve!

With paws, bows, and love,
Hello Kitty (messenger of the lovesick)
P.S. He’s totally planning to steal one of my bows to gift it to you.`;

const subtitle = document.getElementById("subtitle");
let index = 0;

function typeText() {
  if (index < text.length) {
    subtitle.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 50);
  }
}

window.onload = typeText;
