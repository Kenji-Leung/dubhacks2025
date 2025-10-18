package beck.backend.service;

import beck.backend.model.Event;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EventService {

    // In-memory storage for events (later replaced with DynamoDB)
    private final List<Event> events = new ArrayList<>();

    // Return all stored events
    public List<Event> getAllEvents() {
        return events;
    }

    // Add an event manually
    public Event addEvent(Event event) {
        events.add(event);
        return event;
    }

    // Stub for processing event from a URL
    public Event processEventFromUrl(String url) {
        Event e = new Event();
        e.setTitle("Sample Event from URL");
        e.setDate("2025-10-20");
        e.setStartTime("10:00");
        e.setEndTime("12:00");
        e.setAddress("Sample Location");
        e.setNote("This is a placeholder event for URL: " + url);
        events.add(e);
        return e;
    }
}
