package beck.backend.controller;

import beck.backend.model.Event;
import beck.backend.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping
    public List<Event> getEvents() {
        return eventService.getAllEvents();
    }

    @PostMapping("/manual")
    public Event addEvent(@RequestBody Event event) {
        return eventService.addEvent(event);
    }

    @PostMapping("/from-url")
    public Event addEventFromUrl(@RequestParam String url) {
        return eventService.processEventFromUrl(url);
    }
}