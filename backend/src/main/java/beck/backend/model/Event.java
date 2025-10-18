package beck.backend.model;

import lombok.Data;

@Data
public class Event {
    private String title;
    private String date;
    private String startTime;
    private String endTime;
    private String address;
    private String note;

   
}
