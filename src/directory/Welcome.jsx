import React, { useEffect } from "react";
import { gsap } from "gsap";

import BackgroundComponent from "../components/BackgroundComponent";

export default function Welcome() {

  useEffect(() => {
    const hero_animation = gsap.fromTo("#hero_name", {
      "--radial-position": "-2rem"
    }, {
      "--radial-position": "100%"
    }).repeat(-1)
      .duration(3);
    return () => hero_animation.kill()
  }, [])

  return (
    <>
    <BackgroundComponent />
    <section id="welcome_section">
        <div className="hero_wrapper">
          <h1 id="hero_name">GIORGI KARTSIVADZE</h1>
          <div className="horizontal_line"></div>
          <p>Front-end Developer</p>
        </div>
        <div className="skills_wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" fill="none" xmlns:v="https://vecta.io/nano" viewBox="0 0 76 76" ><g clipPath="url(#A)" fill="#0ff"><path d="M28.835 38.735h2.608 15.722l-.953 10.751L38 51.575l-8.212-2.089-.568-6.402h-8.38l1.155 13.034L38 60.187l16.005-4.07 2.218-25.033H28.156l-.741-8.365h29.55l.74-8.348h-39.41l2.16 24.363h8.38zM3.483.5l.144 1.557 6.135 66.264L38 75.5l28.237-7.18L72.517.5H3.483zM59.46 62.531L38 67.987 16.539 62.53 11.47 7.782h53.06l-5.069 54.749z" /></g><defs><clipPath id="A"><path fill="#fff" transform="translate(.5 .5)" d="M0 0h75v75H0z" /></clipPath></defs></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" fill="#0ff" clipPath="url(#clip0_11_27)" xmlns:v="https://vecta.io/nano" viewBox="0 0 76 76" ><path d="M38 75.5L9.83 67.821 3.909.5h68.182L66.17 67.821 38 75.5zM16.469 62.286L38 68.179l21.531-5.893 4.665-54.643H11.804l4.665 54.643zm3.804-45.422h35.455l-3.191 38.122-14.714 4.832-14.891-3.758-1.595-12.886h7.977v6.443l8.509 1.611 7.8-1.611v-9.665H21.336l-.532-8.054a4.06 4.06 0 0 1 2.659-1.074c12.232 0 22.159 1.074 22.159 1.074v-6.443H21.336l-1.064-8.591z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" fill="none" xmlns:v="https://vecta.io/nano"viewBox="0 0 76 76"  ><g clipPath="url(#A)"><path fillRule="evenodd" d="M.648.573C.564.585.57.686.576.787v74.557l74.85.071V.573H.648zM38.57 66.735c-1.732 1.746-4.465 2.774-7.827 2.774-5.514 0-8.576-2.687-10.53-6.403 1.881-1.201 3.804-2.362 5.763-3.486.799 2.236 3.499 4.749 6.545 3.202 1.931-.981 1.708-3.957 1.708-7.186V35.148c-.006-.101-.012-.201.071-.214h6.902v17.216c0 6.24.446 11.483-2.633 14.585zm30.879-6.189c-.392 5.842-5.163 8.945-11.597 8.963-6.308.018-10.345-2.785-12.808-7.114 1.77-1.218 3.776-2.2 5.621-3.343 1.477 2.309 4.034 4.528 7.826 4.197 2.363-.206 5.106-2.132 3.557-5.051-.751-1.415-2.566-2.134-4.198-2.845-5.178-2.259-11.254-4.332-10.673-12.45.194-2.712 1.443-4.618 3.06-5.976 1.657-1.392 3.876-2.324 6.83-2.419 5.366-.172 8.309 2.215 10.317 5.549-1.709 1.302-3.591 2.433-5.479 3.557-.619-1.904-3.61-3.758-6.119-2.632-1.141.512-2.166 2.016-1.565 3.841.536 1.628 2.723 2.519 4.482 3.273 5.325 2.279 11.276 4.507 10.744 12.45z" fill="#0ff" /></g><defs><clipPath id="A"><path fill="#fff" transform="translate(.5 .5)" d="M0 0h75v75H0z" /></clipPath></defs></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" fill="#0ff" xmlns:v="https://vecta.io/nano" viewBox="0 0 76 76" ><path d="M60.655 26.973l-2.263-.715.349-1.547c1.714-8.335.593-15.05-3.231-17.26-3.662-2.121-9.668.089-15.727 5.375a47.8 47.8 0 0 0-1.75 1.611c-.381-.367-.772-.726-1.172-1.078-6.35-5.651-12.715-8.032-16.535-5.814-3.662 2.125-4.75 8.437-3.208 16.337a49.25 49.25 0 0 0 .52 2.334 47.06 47.06 0 0 0-2.603.82c-7.436 2.6-12.19 6.677-12.19 10.904 0 4.368 5.104 8.748 12.857 11.404a40.37 40.37 0 0 0 1.904.596 43.38 43.38 0 0 0-.552 2.515c-1.465 7.764-.322 13.926 3.333 16.039 3.775 2.181 10.107-.06 16.28-5.465a37.75 37.75 0 0 0 1.465-1.355 44.55 44.55 0 0 0 1.904 1.737c5.977 5.153 11.878 7.235 15.527 5.117 3.772-2.188 4.998-8.809 3.406-16.865a40.84 40.84 0 0 0-.422-1.884 44.84 44.84 0 0 0 1.308-.409c8.057-2.676 13.305-7.003 13.305-11.426-.003-4.248-4.91-8.351-12.504-10.972zM41.759 15.096c5.19-4.528 10.042-6.315 12.253-5.038 2.354 1.361 3.27 6.848 1.79 14.045a43.1 43.1 0 0 1-.316 1.402 71.44 71.44 0 0 0-9.401-1.488 70.46 70.46 0 0 0-5.943-7.434 42.23 42.23 0 0 1 1.614-1.487h.003zM23.605 41.552a88.4 88.4 0 0 0 1.994 3.646 85.94 85.94 0 0 0 2.208 3.62 63.77 63.77 0 0 1-6.48-1.044 67.59 67.59 0 0 1 2.279-6.221zm0-7.079a65.12 65.12 0 0 1-2.234-6.098c2.007-.45 4.146-.817 6.375-1.096a86.95 86.95 0 0 0-2.156 3.549 91.75 91.75 0 0 0-1.989 3.645h.004zm1.597 3.54a85.84 85.84 0 0 1 2.991-5.681 84.93 84.93 0 0 1 3.409-5.439c2.092-.158 4.236-.242 6.403-.242s4.324.083 6.415.243c1.192 1.767 2.322 3.573 3.388 5.42a101.7 101.7 0 0 1 3.031 5.654 91.86 91.86 0 0 1-3.023 5.704 99.62 99.62 0 0 1-3.369 5.455c-2.087.147-4.248.227-6.445.227a98.04 98.04 0 0 1-6.366-.202c-1.214-1.776-2.359-3.597-3.437-5.462a84.84 84.84 0 0 1-3-5.678h.004zm25.213 7.165a92.32 92.32 0 0 0 2.039-3.734c.893 2.025 1.681 4.094 2.361 6.199a63.66 63.66 0 0 1-6.561 1.121 105.82 105.82 0 0 0 2.161-3.586zm2.01-10.704a98.13 98.13 0 0 0-2.023-3.662 88.79 88.79 0 0 0-2.137-3.524c2.243.284 4.395.662 6.412 1.124-.649 2.057-1.4 4.081-2.251 6.063zm-14.391-15.74a64.13 64.13 0 0 1 4.138 5.007c-2.769-.132-5.539-.132-8.312 0 1.367-1.808 2.766-3.485 4.173-5.007zm-16.197-8.587c2.353-1.365 7.554.586 13.037 5.459a38.9 38.9 0 0 1 1.055.977 71.97 71.97 0 0 0-5.985 7.428 73.12 73.12 0 0 0-9.384 1.465 45.19 45.19 0 0 1-.483-2.171c-1.326-6.772-.448-11.877 1.761-13.159zM18.408 47.04a35.16 35.16 0 0 1-1.736-.544c-3.428-1.172-6.259-2.701-8.203-4.367-1.74-1.493-2.622-2.982-2.622-4.189 0-2.565 3.817-5.837 10.184-8.057.8-.278 1.606-.533 2.42-.763.946 3.038 2.091 6.011 3.428 8.899a73.61 73.61 0 0 0-3.47 9.021zm16.279 13.721c-2.729 2.391-5.462 4.085-7.872 4.939-2.165.766-3.889.788-4.931.186-2.218-1.282-3.141-6.231-1.882-12.87a45.68 45.68 0 0 1 .513-2.344 70.45 70.45 0 0 0 9.476 1.375 73.48 73.48 0 0 0 6.035 7.471 32.26 32.26 0 0 1-1.339 1.242zm3.431-3.401c-1.424-1.54-2.845-3.243-4.23-5.074 1.347.053 2.718.079 4.113.079 1.433 0 2.851-.031 4.248-.094a64.39 64.39 0 0 1-4.131 5.089zm18.24 4.188c-.419 2.262-1.261 3.77-2.303 4.374-2.216 1.286-6.955-.385-12.064-4.793a48.13 48.13 0 0 1-1.768-1.611 71.05 71.05 0 0 0 5.893-7.5 69.99 69.99 0 0 0 9.521-1.472 37.3 37.3 0 0 1 .381 1.705c.705 3.56.806 6.779.34 9.297zm2.549-15.035a41.71 41.71 0 0 1-1.181.371 70.78 70.78 0 0 0-3.561-8.927 70.53 70.53 0 0 0 3.422-8.798c.719.209 1.418.429 2.09.662 6.507 2.244 10.477 5.566 10.477 8.12 0 2.725-4.288 6.261-11.247 8.572zM38 44.233a6.3 6.3 0 0 0 4.482-10.745 6.3 6.3 0 0 0-10.76 4.446c-.002.826.159 1.644.474 2.408a6.29 6.29 0 0 0 1.36 2.043c.583.585 1.276 1.049 2.038 1.367s1.58.481 2.406.482z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" fill="none" xmlns:v="https://vecta.io/nano" viewBox="0 0 76 76" ><g clipPath="url(#A)"><path d="M73.619 53.913s-9.31 25.105-41.36 19.261c-.504-.094-.988-.269-1.478-.417l-.345-.103-1.431-.468-.161-.056a47.69 47.69 0 0 1-1.283-.475l-.332-.13-1.359-.565-.247-.11-1.166-.54-.301-.145-.17-.083-.736-.381-.568-.293-1.028-.577-.378-.214-1.369-.839-.379-.252-.875-.579-.09-.064-.328-.233a38.63 38.63 0 0 1-.901-.646l-.43-.326-.803-.628-.398-.318-.963-.813-.184-.158c-.006-.003-.01-.007-.017-.013l-1.06-.965-.316-.3-.773-.759-.311-.313-.969-1.021c-.012-.016-.023-.025-.037-.04l-.019-.021a45.05 45.05 0 0 1-.953-1.088l-.261-.312-.685-.841-.278-.354-.741-.985-.137-.184c-.009-.01-.017-.021-.023-.032l-.813-1.172-.239-.369-.56-.877-.277-.455-.483-.828-.264-.472-.147-.262-.237-.456-.37-.72c-5.062-10.121-5.888-22.514.739-32.039l5.173-6.561c-5.836 11.28-3.213 25.016 4.088 34.975.264.362.534.72.809 1.078l.257.32.701.867.256.303a36.9 36.9 0 0 0 .974 1.108l.046.05c.314.343.635.682.961 1.016l.307.306a30.29 30.29 0 0 0 .783.767c.1.1.201.196.306.295l1.089.99c.038.034.078.064.113.096.341.297.686.586 1.036.873l.37.297a41.72 41.72 0 0 0 .832.65l.409.309.921.666c.105.071.208.149.314.22.321.222.647.437.975.648l.369.246 1.371.839.355.198 1.053.59c.192.107.39.204.585.307l.877.446.329.158 1.134.528.269.119a38.96 38.96 0 0 0 1.346.559l.35.137c.412.16.827.314 1.246.462l.194.07c.468.161.939.314 1.413.459l.367.111c.486.144.969.299 1.468.412 13.15 2.993 27.029.305 34.848-9.882zM27.225 37.818c.719 1.029 1.514 2.254 2.468 3.081a28.64 28.64 0 0 0 1.075 1.116c.093.095.188.186.284.28a31.47 31.47 0 0 0 1.098 1.021c.016.012.03.028.045.038a33.22 33.22 0 0 0 1.294 1.072l.291.227a31.68 31.68 0 0 0 1.343.98c.014.01.025.02.039.029.201.14.407.27.612.404.099.063.192.132.29.191a27.23 27.23 0 0 0 .995.61c.048.029.094.054.141.081l.88.492c.102.057.207.108.312.163l.615.318a3.3 3.3 0 0 0 .093.042c.422.208.848.409 1.283.598.093.041.189.078.283.117a32.66 32.66 0 0 0 1.052.427l.45.165c.321.119.642.228.966.336l.437.14c.46.143.916.324 1.397.403 24.746 4.1 30.459-14.953 30.459-14.953-5.15 7.417-15.123 10.956-25.766 8.194a30.64 30.64 0 0 1-1.4-.406c-.143-.043-.281-.089-.422-.136a28.92 28.92 0 0 1-.981-.338l-.442-.165a33.7 33.7 0 0 1-1.054-.425l-.284-.121a29.32 29.32 0 0 1-1.291-.6c-.219-.107-.433-.22-.648-.33l-.373-.192a31.52 31.52 0 0 1-.819-.462l-.196-.111c-.334-.196-.665-.398-.992-.606-.101-.064-.198-.134-.298-.2l-.643-.425a35.02 35.02 0 0 1-1.337-.978l-.302-.237c-4.658-3.678-8.35-8.705-10.107-14.404-1.839-5.911-1.442-12.546 1.745-17.931l-3.916 5.528c-4.792 6.897-4.532 16.13-.794 23.424.628 1.223 1.333 2.409 2.12 3.539zm26.083-8.533c.204.076.407.144.614.213l.271.086c.291.092.581.198.881.255 13.665 2.64 17.37-7.012 18.357-8.433-3.247 4.674-8.702 5.796-15.397 4.172-.528-.129-1.109-.32-1.62-.5-.654-.233-1.296-.499-1.922-.799-1.19-.571-2.322-1.264-3.373-2.057-5.99-4.545-9.711-13.216-5.802-20.277l-2.115 2.915c-2.825 4.158-3.102 9.322-1.143 13.915 2.067 4.874 6.304 8.698 11.249 10.511z" fill="#0ff" /></g><defs><clipPath id="A"><path fill="#fff" transform="translate(.5 .5)" d="M0 0h75v75H0z" /></clipPath></defs></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" fill="none" xmlns:v="https://vecta.io/nano" viewBox="0 0 76 76" ><path d="M38.401 44.328c-1.127.518-2.362 1.193-4.835 2.55l-2.829 1.552-.192-.209c-4.891-5.227-13.938-8.918-13.554-15.937.143-2.557 1.022-9.269 17.374-17.421 13.458-6.633 24.166-4.795 26.016-.719 2.658 5.81-5.74 16.622-19.638 18.19-1.538.312-3.127.274-4.649-.11s-2.937-1.106-4.143-2.112c-.736-.799-.846-.846-1.118-.687-.448.234-.159.959 0 1.374.53.96 1.247 1.804 2.109 2.482s1.851 1.176 2.909 1.465a26.72 26.72 0 0 0 16.303-1.615c8.423-3.26 15-12.323 13.073-19.922-1.934-7.704-14.721-10.245-26.819-5.946a60.94 60.94 0 0 0-20.602 11.829c-6.666 6.234-7.72 11.653-7.289 13.922 1.551 8.055 12.656 13.298 17.109 17.182l-.607.335c-2.222 1.104-10.692 5.531-12.804 10.214-2.398 5.306.384 9.11 2.222 9.621a13.67 13.67 0 0 0 14.721-5.963c1.297-1.993 2.093-4.269 2.321-6.636s-.119-4.753-1.011-6.957a11.8 11.8 0 0 1 1.678-1.118c1.134-.67 2.215-1.331 3.173-1.842a24.55 24.55 0 0 1 10.488-2.318c7.608.895 9.11 5.641 8.822 7.641-.135.709-.42 1.381-.837 1.971s-.954 1.084-1.578 1.448c-.527.335-.703.448-.656.687.063.352.319.335.766.272a5.94 5.94 0 0 0 4.139-5.29c.234-4.687-4.235-9.83-12.148-9.783a18.17 18.17 0 0 0-6.905 1.376 14.94 14.94 0 0 0-1.024.469l.012.007zM27.092 62.701c-2.527 2.749-6.042 3.787-7.561 2.909-1.641-.937-.991-5.004 2.109-7.912a40.27 40.27 0 0 1 5.93-4.427c.368-.234.912-.544 1.566-.937l.176-.096.384-.234a10.92 10.92 0 0 1 .146 5.702c-.457 1.88-1.406 3.605-2.75 4.997z" fill="#0ff" /></svg>
          <div className="horizontal_line"></div>
        </div>
    </section>
    </>
  )
};