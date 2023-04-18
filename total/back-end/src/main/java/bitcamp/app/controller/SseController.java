package bitcamp.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;
import bitcamp.app.SseManager;

@RestController
public class SseController {

  private SseManager sseManager = new SseManager();

  @GetMapping("/sse")
  public SseEmitter handleSse() {
    System.out.println("sse 연결됨!");

    SseEmitter emitter = new SseEmitter();
    sseManager.addEmitter(emitter);

    emitter.onCompletion(() -> sseManager.removeEmitter(emitter));
    emitter.onTimeout(() -> sseManager.removeEmitter(emitter));

    return emitter;
  }

  public void sendMessageToAll(Object message) {
    sseManager.sendToAll(message);
  }
}
