class Inventory {
    constructor(hearts) {
      this.heartInventory = hearts || ["heart", "heart", "heart"];
      this.keyInventory = [];
      this.weaponInventory = ["normal"];
      this.weaponSelect = 0;
      sessionStorage.setItem("Hearts",this.heartInventory.length);
    }

    addItem(element) {

        // Heart
        if (element == "heart") {

            this.heartInventory.push(element);
            sessionStorage.setItem("Hearts",this.heartInventory.length);

            this.updateDisplay()

            return this.heartInventory;
        }

        // Key
        if (element == "key") {

            this.keyInventory.push(element);

            this.updateDisplay(element)

            return this.keyInventory;
        }

    }

    selectWeapon(selection) {
        if (selection == 49) {
            document.getElementById("weapon0").className = "weaponboxSelected"
            document.getElementById("weapon1").className = "weaponbox"
            document.getElementById("weapon2").className = "weaponbox"
            this.weaponSelect = 0;
        }
        else if (selection == 50) {
            document.getElementById("weapon0").className = "weaponbox"
            document.getElementById("weapon1").className = "weaponboxSelected"
            document.getElementById("weapon2").className = "weaponbox"
            this.weaponSelect = 1;
        }
        else if (selection == 51) {
            document.getElementById("weapon0").className = "weaponbox"
            document.getElementById("weapon1").className = "weaponbox"
            document.getElementById("weapon2").className = "weaponboxSelected"
            this.weaponSelect = 2;
        }
    }

    updateDisplay() {

        if (this.keyInventory.length == 1) {
            document.getElementById("keyDisplay").innerHTML = String(this.keyInventory.length) + " key";
        }

        if (this.keyInventory.length > 1) {
            document.getElementById("keyDisplay").innerHTML = String(this.keyInventory.length) + " keys";
        }

        if (this.keyInventory.length == 0) {
            document.getElementById("keyDisplay").innerHTML = String(this.keyInventory.length) + " keys";
        }


        if (this.heartInventory.length == 1) {
            document.getElementById("heartDisplay").innerHTML = String(this.heartInventory.length) + " heart";
        }

        if (this.heartInventory.length > 1) {
            document.getElementById("heartDisplay").innerHTML = String(this.heartInventory.length) + " hearts";
        }

        if (this.heartInventory.length == 0) {
            document.getElementById("heartDisplay").innerHTML = String(this.heartInventory.length) + " heart";
        }

    }

    returnHeartInv() {
        return this.heartInventory;
    }

    checkLife(){
      if (this.heartInventory.length == 0){
        document.getElementById("dead").submit();
      }
    }

}
