INSERT INTO public.event (name, description, location, date) VALUES
('Music Festival', 'A live music festival with popular bands.', 'Central Park', '2024-06-15 18:00:00+00'),
('Tech Conference', 'A gathering of tech enthusiasts and professionals.', 'Convention Center', '2024-07-10 09:00:00+00'),
('Art Exhibition', 'Showcasing modern and classic artworks.', 'City Gallery', '2024-08-01 14:00:00+00'),
('Food Fair', 'A food festival featuring various cuisines.', 'Town Square', '2024-09-05 12:00:00+00'),
('Marathon', 'Annual city marathon for athletes and amateurs.', 'City Stadium', '2024-10-20 07:00:00+00');

INSERT INTO public."user" (name, surname, email, password, is_admin) VALUES
('John', 'Doe', 'john.doe@example.com', 'password123', false),
('Jane', 'Smith', 'jane.smith@example.com', 'securepass', false),
('Alice', 'Johnson', 'alice.johnson@example.com', 'mypassword', false),
('Bob', 'Brown', 'bob.brown@example.com', 'strongpassword', true),
('Carol', 'Davis', 'carol.davis@example.com', 'admin123', true);

INSERT INTO public.ticket (event_id, price, is_bought) VALUES
(1, 50.00, false), -- For Music Festival
(1, 75.00, false), -- For Music Festival
(2, 100.00, true), -- For Tech Conference
(2, 150.00, false), -- For Tech Conference
(3, 25.00, true), -- For Art Exhibition
(4, 10.00, false), -- For Food Fair
(4, 15.00, true), -- For Food Fair
(5, 30.00, false); -- For Marathon

INSERT INTO public.purchased_ticket (ticket_id, user_id) VALUES
(3, 1), -- John bought a Tech Conference ticket
(5, 2), -- Jane bought an Art Exhibition ticket
(7, 3); -- Alice bought a Food Fair ticket