const jeeMain = 130;
        const jeeAdv = 60;

        if (jeeMain > 120) {
            document.write("JEE-Main Cleared");
            if (jeeAdv > 80) {
                document.write("<br/> JEE-Adv Cleared")

            }
            else {
                document.write("<br/> JEE-Main Cleared But JEE-Adv NOT Cleared")

            }
        }
        else{
            document.write("<br/>Admission Rejected")
        }
