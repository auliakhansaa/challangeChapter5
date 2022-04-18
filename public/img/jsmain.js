class Game {
    constructor() {
    //   this.batuP = new BatuP(".batu-1 button"); //batu player
    //   this.batuC = new BatuC(".batu-2 img"); // batu computer
    //   this.guntingP = new GuntingP(".gunting-1 img"); // gunting Player
    //   this.guntingC = new GuntingC(".gunting-2 img"); // gunting Computer
    //   this.kertasP = new KertasP(".kertas-1 img"); // Kertas Player
    //   this.kertasC = new KertasC(".kertas-2 img"); //Kertas Computer
    //   this.giliran = "anda"; // Nilai ini hanya boleh "anda" atau "computer"
  
        this.controlKeterangan = document.querySelector(
            ".rec .keterangan"
        );

        this.controlGuntingBack = document.querySelector(
            ".gunting-back"
        );
        this.controlBatuBack = document.querySelector(
            ".batu-back"
        );
        this.controlKertasBack = document.querySelector(
            ".kertas-back"
        );

        this.controlGunting2Back = document.querySelector(
            ".gunting2-back"
        );
        this.controlBatu2Back = document.querySelector(
            ".batu2-back"
        );
        this.controlKertas2Back = document.querySelector(
            ".kertas2-back"
        );

        this.controlKotakKeterangan = document.querySelector(
            ".rec"
        );

        this.controlRefresh = document.querySelector( ".refresh img");
        this.controlRefresh.addEventListener("click",()=>{
            console.log('refresh');
            this.controlBatuBack.style.display = "none";
            this.controlKertasBack.style.display = "none";
            this.controlGuntingBack.style.display = "none";
            this.controlBatu2Back.style.display = "none";
            this.controlKertas2Back.style.display = "none";
            this.controlGunting2Back.style.display = "none";
            this.controlKotakKeterangan.style.display = "none";
        });
    
        //   this.controlAngka = document.querySelector("#game-control .angka");
        //   this.controlAngka.textContent = 0;
    

        this.controlButton = document.querySelector(".batu-1 button");
        console.log(this.controlButton);
        this.controlButton.addEventListener("click", () => {
            this.controlBatuBack.style.display ="block";
            console.log('test');
            this.batu();
        });

        this.controlButton2 = document.querySelector(".kertas-1 button");
        console.log(this.controlButton2);
        this.controlButton2.addEventListener("click", () => {
            this.controlKertasBack.style.display ="block";
        console.log('test');
        this.kertas();
        });

        this.controlButton3 = document.querySelector(".gunting-1 button");
        console.log(this.controlButton3);
        this.controlButton3.addEventListener("click", () => {
            this.controlGuntingBack.style.display ="block";
            console.log('test');
            this.gunting();
        });
      

    }
  
    batu() {
    
      let nilai = 1;
      let angka;
      const interval = setInterval(() => {
        angka = Math.ceil(Math.random() * 3); // Random 1-5
        
  
        // this.controlAngka.textContent = angka;
      }, 50); // 50 = 0.05 detik
  
      // Interval berhenti di detik ke-2
      setTimeout(() => {
        clearInterval(interval);
  
        // this.controlAngka.style.color = null;
  
        if(angka===nilai){
            this.controlKotakKeterangan.style.display="block";
            this.controlKeterangan.style.display ="block";
            this.controlBatu2Back.style.display ="block";
          console.log(angka);
          console.log(nilai);
          this.controlKeterangan.textContent="DRAW";
          } 
          
          else if(angka==2){
              this.controlKotakKeterangan.style.display="block";
              this.controlKeterangan.style.display ="block";
              this.controlKertas2Back.style.display ="block";
          console.log(angka);
          console.log(nilai);
          this.controlKeterangan.textContent="COM WON";
  
          }else if(angka==3){
              this.controlKotakKeterangan.style.display="block";
              this.controlKeterangan.style.display ="block";
              this.controlGunting2Back.style.display ="block";
          console.log(angka);
          console.log(nilai);
          this.controlKeterangan.textContent="PLAYER WON";
  
          }
        
      }, 500); // 500 = 2 detik
   
    }

    gunting() {
    
        let nilai = 2;
        let angka;
        const interval = setInterval(() => {
          angka = Math.ceil(Math.random() * 3); // Random 1-5
          
          
          // this.controlAngka.textContent = angka;
        }, 50); // 50 = 0.05 detik
    
        // Interval berhenti di detik ke-2
        setTimeout(() => {
          clearInterval(interval);
    
          // this.controlAngka.style.color = null;
    
        //   this.com(angka,nilai);
        if(angka===nilai){
            this.controlKotakKeterangan.style.display="block";
            this.controlKeterangan.style.display ="block";
            this.controlGunting2Back.style.display ="block";
          console.log(angka);
          console.log(nilai);
          this.controlKeterangan.textContent="DRAW";
          } 
          
          else if(angka==2){
              this.controlKotakKeterangan.style.display="block";
              this.controlKeterangan.style.display ="block";
              this.controlBatu2Back.style.display ="block";
          console.log(angka);
          console.log(nilai);
          this.controlKeterangan.textContent="COM WON";
  
          }else if(angka==3){
              this.controlKotakKeterangan.style.display="block";
              this.controlKeterangan.style.display ="block";
              this.controlKertas2Back.style.display ="block";
          console.log(angka);
          console.log(nilai);
          this.controlKeterangan.textContent="PLAYER WON";
  
          }
        }, 500); // 500 = 2 detik
  
      }

    
    kertas() {
    
        let nilai = 3;
        let angka;
        const interval = setInterval(() => {
          angka = Math.ceil(Math.random() * 3); // Random 1-3
    
          // this.controlAngka.textContent = angka;
        }, 50); // 50 = 0.05 detik
    
        // Interval berhenti di detik ke-2
        setTimeout(() => {
          clearInterval(interval);
    
          // this.controlAngka.style.color = null;
          if(angka===nilai){
            this.controlKotakKeterangan.style.display="block";
            this.controlKeterangan.style.display ="block";
            this.controlKertas2Back.style.display ="block";
          console.log(angka);
          console.log(nilai);
          this.controlKeterangan.textContent="DRAW";
          } 
          
          else if(angka==2){
              this.controlKotakKeterangan.style.display="block";
              this.controlKeterangan.style.display ="block";
              this.controlGunting2Back.style.display ="block";
          console.log(angka);
          console.log(nilai);
          this.controlKeterangan.textContent="COM WON";
  
          }else if(angka==3){
              this.controlKotakKeterangan.style.display="block";
              this.controlKeterangan.style.display ="block";
              this.controlBatu2Back.style.display ="block";
          console.log(angka);
          console.log(nilai);
          this.controlKeterangan.textContent="PLAYER WON";
  
          }
        //   this.com(angka,nilai);
        }, 500); // 500 = 2 detik
      }
  
    // com(angka,nilai){
    //     if(angka===nilai){
    //       this.controlKotakKeterangan.style.display="block";
    //       this.controlKeterangan.style.display ="block";
    //     console.log(angka);
    //     console.log(nilai);
    //     this.controlKeterangan.textContent="player won";
    //     } 
        
    //     else if(angka > nilai){
    //         this.controlKotakKeterangan.style.display="block";
    //         this.controlKeterangan.style.display ="block";
    //     console.log(angka);
    //     console.log(nilai);
    //     this.controlKeterangan.textContent="Com Won";

    //     }else{
    //         this.controlKotakKeterangan.style.display="block";
    //         this.controlKeterangan.style.display ="block";
    //     console.log(angka);
    //     console.log(nilai);
    //     this.controlKeterangan.textContent="Draw";

    //     }

    // }
   
  }

  new Game ();