'use strict';

class View{

    constructor() {
    }

    registerClickListener(listener){
        // document.getElementById("xxxxxxx").addEventListener("click", listener);
    }

    // when called by controller will update the number of new cases in glasgow
    updateUserDefinedLocationNewCases(cases) {
        if(document.getElementById("user-defined-location-new-cases")!==null){ //checks that the page actually has the div so it doesnt try it on the wrong page
            document.getElementById("user-defined-location-new-cases").innerText = cases;
          }
    }

    updateUserDefinedLocationNewDeaths(cases) {
        if(document.getElementById("user-defined-location-new-deaths")!==null){
            document.getElementById("user-defined-location-new-deaths").innerText = cases;
        }
    }

    updateUserDefinedLocationAlertLevel(level){
        if(document.getElementById("local-alert-level")!==null){
            document.getElementById("local-alert-level").innerText = level;
        }
    }

    updateUserDefinedTotalCases(cases){
        if(document.getElementById("user-defined-total-cases")!==null){
            document.getElementById("user-defined-total-cases").innerText = cases;
        }
    }

    updateUserDefinedTotalDeaths(deaths){
        if(document.getElementById("user-defined-total-deaths")!==null){
            document.getElementById("user-defined-total-deaths").innerText = deaths;
        }
    }

    updateNationalNewCases(cases){
        if(document.getElementById("national-new-cases")!==null){
            document.getElementById("national-new-cases").innerText = cases;
        }
    }

    updateNationalTotalCases(cases){
        if(document.getElementById("fourth-box-data")!==null){
            document.getElementById("fourth-box-data").innerText = cases;
        }
    }

    updateNationalNewDeaths(cases){
        if(document.getElementById("national-new-deaths")!==null){
            document.getElementById("national-new-deaths").innerText = cases;
        }
    }

    updateFirstDoseVaccinated(total){
        if(document.getElementById("first-dose-vaccinated")!==null){
            document.getElementById("first-dose-vaccinated").innerText = total;
            document.getElementById("thirdbox").innerText = "First Dose Vaccinations";
        }
    }

    //for global data we are just modifying the existing boxes for national so ids are wrongly names but work

    updateGlobalNewCases(cases){
        if(document.getElementById("national-new-cases") !== null){
            document.getElementById("national-new-cases").innerText = cases;
        }
    }

    updateGlobalNewDeaths(deaths){
        if(document.getElementById("national-new-deaths") !== null){
            document.getElementById("national-new-deaths").innerText = deaths;
            //document.getElementById("thirdbox").innerText = "test";
        }
    }

    updateGlobalTotalDeaths(deaths){
        if(document.getElementById("first-dose-vaccinated") !== null){
            document.getElementById("first-dose-vaccinated").innerText = deaths;
            document.getElementById("thirdbox").innerText = "Total Deaths"; //rename from vaccination box to total deaths because we dont have reliable global vaccination data
        }
    }

    updateGlobalTotalCases(cases){
        if(document.getElementById("fourth-box-data") !== null){
            document.getElementById("fourth-box-data").innerText = cases;
        }
    }

}
