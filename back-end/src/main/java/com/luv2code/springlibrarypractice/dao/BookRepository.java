package com.luv2code.springlibrarypractice.dao;

import com.luv2code.springlibrarypractice.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book,Long> {
}
