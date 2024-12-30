CREATE TABLE IF NOT EXISTS public.event
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default" NOT NULL,
    location character varying(255) COLLATE pg_catalog."default" NOT NULL,
    date timestamp with time zone NOT NULL,
    CONSTRAINT "Event_pkey" PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.ticket
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    event_id integer NOT NULL,
    price numeric NOT NULL,
    is_bought boolean NOT NULL DEFAULT false,
    CONSTRAINT "Ticket_pkey" PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."user"
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    name character varying(255) NOT NULL,
    surname character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    is_admin boolean NOT NULL DEFAULT false,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.purchased_ticket
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    ticket_id integer NOT NULL,
    user_id integer NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.ticket
    ADD CONSTRAINT event_ticket_id_fkey FOREIGN KEY (event_id)
    REFERENCES public.event (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.purchased_ticket
    ADD CONSTRAINT ticket_fkey FOREIGN KEY (ticket_id)
    REFERENCES public.ticket (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.purchased_ticket
    ADD CONSTRAINT user_fkey FOREIGN KEY (user_id)
    REFERENCES public."user" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE public."user" ADD CONSTRAINT unique_email UNIQUE (email);

CREATE INDEX idx_ticket_event_id ON public.ticket (event_id);
CREATE INDEX idx_purchased_ticket_ticket_id ON public.purchased_ticket (ticket_id);
CREATE INDEX idx_purchased_ticket_user_id ON public.purchased_ticket (user_id);