package beck.backend.model;

//test
import lombok.Data;

@Data
public class Event {
    private String title;
    private String date;
    private String startTime;
    private String endTime;
    private String amPmStart;
    private String amPmEnd;
    private String address;
    private String note;

   public boolean timeRangeOverlap(Event other){

    addPmAll(other);
    if (Integer.parseInt(this.startTime) < Integer.parseInt(other.getStartTime()) && Integer.parseInt(other.getStartTime()) < Integer.parseInt(this.endTime)){
        return true;
    } else if (Integer.parseInt(this.startTime) < Integer.parseInt(other.getEndTime()) && Integer.parseInt(other.getEndTime()) < Integer.parseInt(this.endTime)){
        return true;
    } else if (Integer.parseInt(other.getStartTime()) < Integer.parseInt(this.startTime) && Integer.parseInt(this.startTime) < Integer.parseInt(other.getEndTime())){
        return true;
    } else if (Integer.parseInt(other.getStartTime()) < Integer.parseInt(this.endTime) && Integer.parseInt(this.endTime) < Integer.parseInt(other.getEndTime())){
        return true;
    }
     
    return false;
   }

   public void addPmAll(Event other){
    if(other.getAmPmStart().equalsIgnoreCase("pm"))
        other.startTime = String.valueOf(Integer.parseInt(other.getStartTime()) + 1200);

    if(other.getAmPmEnd().equalsIgnoreCase("pm"))
        other.endTime = String.valueOf(Integer.parseInt(other.getEndTime()) + 1200);
        
    if(amPmStart.equalsIgnoreCase("pm"))
        startTime = String.valueOf(Integer.parseInt(this.startTime) + 1200);

    if(amPmEnd.equalsIgnoreCase("pm"))
        endTime = String.valueOf(Integer.parseInt(this.endTime) + 1200);

   }

    public void setTitle(String sample_Event_from_URL) {
        throw new UnsupportedOperationException("Not supported yet.");
    }
}
