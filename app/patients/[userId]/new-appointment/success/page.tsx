import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { getAppointment } from '@/lib/actions/appointment.actions';
import { Doctors } from '@/constants';
import { formatDateTime } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Success = async ({
    params,
    searchParams: rawSearchParams,
}: {
    params: { userId: string };
    searchParams: { appointmentId?: string };
}) => {
    const { userId } = await params;

    const searchParams = await rawSearchParams;
    const appointmentId = searchParams?.appointmentId || '';

    const appointment = await getAppointment(appointmentId);
    const doctor = Doctors.find((doc) => doc.name === appointment.primaryPhysician);

    return (
        <div className="flex h-screen max-h-screen px-[5%]">
            <div className="success-img">
                <Link href="/">
                    <Image 
                        src="/assets/icons/logo-full.svg"
                        height={1000}
                        width={1000}
                        alt="logo"
                        className="h-10 w-fit"
                    />
                </Link>
                <section className="flex flex-col items-center">
                    <Image
                        src="/assets/gifs/success.gif"
                        height={300}
                        width={280}
                        alt="success"
                        unoptimized
                        />
                    <h2 className="header mb-6 max-w-[600px] text-center">
                        Your <span className="text-green-500">appointment request</span> has been successfully submitted!
                    </h2>
                    <p>We will be in touch shortly to confirm.</p>
                </section>
                <section className="request-details">
                    <p>Requested Appointment Details: </p>
                    <div className="flex items-center gap-3">
                        <Image
                            src={doctor?.image!}
                            alt="doctor"
                            width={100}
                            height={100}
                            className="size-12"
                            />
                            <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
                    </div>
                    <div className="flex gap-2">
                        <Image  
                            src="/assets/icons/calendar.svg"
                            height={24}
                            width={24}
                            alt="calendar"
                            />
                            <p>{formatDateTime(appointment.schedule).dateTime}</p>
                    </div>
                </section>
                <Button variant="outline" className="shad-primary-btn" asChild>
                    <Link href={`/patients/${userId}/new-appointment`}>
                        New Appointment
                    </Link>
                </Button>

                <p className="copywright">
                    © 2025 MyPulseFocus
                </p>
            </div>
        </div>
    )
}

export default Success