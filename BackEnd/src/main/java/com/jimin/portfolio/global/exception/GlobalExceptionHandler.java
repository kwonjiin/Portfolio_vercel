package com.jimin.portfolio.global.exception;

import com.jimin.portfolio.global.common.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
        public ResponseEntity<ApiResponse<Void>> validationException(MethodArgumentNotValidException e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.fail("요청 값이 올바르지 않습니다."));
        }

    @ExceptionHandler(BusinessException.class)
    public ResponseEntity<ApiResponse<Void>> businessException(BusinessException e) {
        return ResponseEntity.badRequest()
                .body(ApiResponse.fail(e.getMessage()));
    }

}
