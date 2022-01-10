  
    class InfoList extends HTMLElement {
        
        
        constructor(){
            super();
            
            this.attachShadow({
                mode: 'open'
            });
            
            this.shadowRoot.innerHTML = `
            <style>
            @media screen and (max-width:480px) {
                .cart{
                    display: none;
                }
                
                .info{
                    border-radius: 20px;
                    width: 80vw;
                    height: 40vh;
                    margin-top: 5vh;
                    margin-left:10vw;
                    border-style: solid;
                    border-width:1px;
                    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
                }
                .info p{
                    margin-left: 8vw;
                    margin-top: 2vh;
                    margin-right: 4vw;
                    margin-bottom: 0vh;
                    font-size: 6vw;
                    float: left;
                }
                
                .info-title{
                    border-radius: 20px;
                    float: left;
                    width: 80vw;
                    height: 5vh;
                    background: #E2E0E0;
                    padding-left: auto;
                    display: flex;
                    justify-content: center;
                    font-size: 6vw;
                }
                .order{
                    width: 68vw;
                    height: 6vh;
                    background-color: #3BEF0E;
                    float: left;
                    border-width: 0em;
                    border-radius: 20px;
                    margin-top: 4vh;
                    margin-left: 6vw;
                }
                
                .cancel{
                    width: 68vw;
                    height: 6vh;
                    background-color: #F5734C;
                    float: left;
                    border-width: 0em;
                    border-radius: 20px;
                    margin-top: 2vh;
                    margin-left: 6vw;
                }
            }
            @media screen and (min-width: 480px) {
                .cart-mobile{
                    display: none;
                }
                .info{
                    border-radius: 20px;
                    width: 20vw;
                    height: 40vh;
                    float: left;
                    margin-top: 5vh;
                    margin-left:3vw;
                    border-style: solid;
                    border-width:1px;
                }
                
                .info p{
                    margin-left: 2vw;
                    margin-top: 2vh;
                    margin-right: 2vw;
                    margin-bottom: 0vh;
                    float: left;
                }
                
                .info-title{
                    border-radius: 20px;
                    float: left;
                    width: 20vw;
                    height: 5vh;
                    background: #E2E0E0;
                    padding-left: auto;
                    display: flex;
                    justify-content: center;
                }
                
                .order{
                    width: 18vw;
                    height: 6vh;
                    background-color: #3BEF0E;
                    float: left;
                    border-width: 0em;
                    border-radius: 20px;
                    margin-top: 8vh;
                    margin-left: 1vw;
                }
                
                .cancel{
                    width: 18vw;
                    height: 6vh;
                    background-color: #F5734C;
                    float: left;
                    border-width: 0em;
                    border-radius: 20px;
                    margin-top: 2vh;
                    margin-left: 1vw;
                }
                
                /* .header-1{
                    display: none;
                }
                .header-2{
                    display: none;
                } */
            }
            </style>
            <div class="info">
            
                <div class="info-title">
                Төлбөрийн мэдээлэл
                </div>
                
                <p id="info-qnt"></p>
                <p id="info-price"></p>
                
                <button id="order" class="order">
                Захиалах
                </button >
                
                <button class="cancel">
                Өөр бараа сонгох
                </button>
            </div>
            `
            this.shadowRoot.querySelector('#info-qnt').innerHTML = "Тоо ширхэг: " + qnt;
            this.shadowRoot.querySelector('#info-price').innerHTML = "Нийт үнэ: " + sumPrice;
  
        }
        
        changeQnt(qnt){
            this.shadowRoot.querySelector('#info-qnt').innerHTML = "Тоо ширхэг: " + qnt;
         
        }

        changeSumPrice(sumPrice){
            this.shadowRoot.querySelector('#info-price').innerHTML = "Нийт үнэ: " + sumPrice;
        }
    }
     
    window.customElements.define('info-list', InfoList);