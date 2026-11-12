"use client";

import { type FormEvent, useState } from "react";
import {
  emptyInquiry,
  inquiryProjectTypes,
  validateInquiryPayload,
  type InquiryErrors,
  type InquiryField,
  type InquiryPayload,
} from "@/lib/inquiry";

type SubmitState = "idle" | "submitting" | "success";

type InquiryApiResponse = {
  ok: boolean;
  message?: string;
  errors?: InquiryErrors;
};

const inputClassName =
  "min-h-12 w-full rounded-2xl border border-white/14 bg-white/7 px-4 text-sm text-brand-cream outline-none transition-colors duration-200 placeholder:text-brand-cream/36 focus:border-brand-cream/55 focus:bg-white/10";
const labelClassName =
  "font-mono text-[0.68rem] uppercase tracking-[0.24em] text-brand-cream/58";
const errorClassName = "mt-2 text-sm leading-5 text-[#ffc8bd]";

export function InquiryForm() {
  const [values, setValues] = useState<InquiryPayload>(emptyInquiry);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [notice, setNotice] = useState<string | null>(null);

  const isSubmitting = submitState === "submitting";

  function updateValue<Field extends InquiryField>(
    field: Field,
    value: InquiryPayload[Field],
  ) {
    setValues((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });

    if (notice) {
      setNotice(null);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validation = validateInquiryPayload(values);
    if (!validation.success) {
      setErrors(validation.errors);
      setNotice("Please check the highlighted fields.");
      return;
    }

    setSubmitState("submitting");
    setNotice(null);
    setErrors({});

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = (await response
        .json()
        .catch(() => null)) as InquiryApiResponse | null;

      if (!response.ok || !result?.ok) {
        if (result?.errors) {
          setErrors(result.errors);
        }

        throw new Error(result?.message || "The inquiry could not be sent.");
      }

      setSubmitState("success");
      setNotice(
        result.message ||
          "Thanks. Your inquiry has been received and AGENTEC will respond shortly.",
      );
    } catch (error) {
      setSubmitState("idle");
      setNotice(
        error instanceof Error
          ? error.message
          : "The inquiry could not be sent right now.",
      );
    }
  }

  function resetForm() {
    setValues(emptyInquiry);
    setErrors({});
    setNotice(null);
    setSubmitState("idle");
  }

  if (submitState === "success") {
    return (
      <div
        className="max-w-xl border-l border-brand-cream/30 pl-6 text-brand-cream"
        role="status"
        aria-live="polite"
      >
        <p className={labelClassName}>Inquiry received</p>
        <h3 className="mt-4 text-3xl font-semibold leading-tight text-balance sm:text-4xl">
          Thanks. We will be in touch shortly.
        </h3>
        <p className="mt-4 text-base leading-7 text-brand-cream/72">
          {notice ||
            "Your details are with AGENTEC. We will review the fit and reply with the right next step."}
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-white/14 bg-white/6 px-6 text-sm font-semibold text-brand-cream transition-colors duration-300 hover:bg-white/12"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="grid gap-5" noValidate onSubmit={handleSubmit}>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="inquiry-website">Website</label>
        <input
          id="inquiry-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => updateValue("website", event.target.value)}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClassName} htmlFor="inquiry-name">
            Name
          </label>
          <input
            id="inquiry-name"
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={80}
            value={values.name}
            onChange={(event) => updateValue("name", event.target.value)}
            className={inputClassName}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "inquiry-name-error" : undefined}
          />
          {errors.name ? (
            <p id="inquiry-name-error" className={errorClassName}>
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label className={labelClassName} htmlFor="inquiry-email">
            Email
          </label>
          <input
            id="inquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={160}
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
            className={inputClassName}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "inquiry-email-error" : undefined}
          />
          {errors.email ? (
            <p id="inquiry-email-error" className={errorClassName}>
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClassName} htmlFor="inquiry-company">
            Business
          </label>
          <input
            id="inquiry-company"
            name="company"
            autoComplete="organization"
            maxLength={120}
            value={values.company}
            onChange={(event) => updateValue("company", event.target.value)}
            className={inputClassName}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={
              errors.company ? "inquiry-company-error" : undefined
            }
          />
          {errors.company ? (
            <p id="inquiry-company-error" className={errorClassName}>
              {errors.company}
            </p>
          ) : null}
        </div>

        <div>
          <label className={labelClassName} htmlFor="inquiry-phone">
            Phone
          </label>
          <input
            id="inquiry-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
            value={values.phone}
            onChange={(event) => updateValue("phone", event.target.value)}
            className={inputClassName}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "inquiry-phone-error" : undefined}
          />
          {errors.phone ? (
            <p id="inquiry-phone-error" className={errorClassName}>
              {errors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label className={labelClassName} htmlFor="inquiry-project-type">
          Focus
        </label>
        <select
          id="inquiry-project-type"
          name="projectType"
          required
          value={values.projectType}
          onChange={(event) =>
            updateValue(
              "projectType",
              event.target.value as InquiryPayload["projectType"],
            )
          }
          className={`${inputClassName} appearance-none`}
          aria-invalid={Boolean(errors.projectType)}
          aria-describedby={
            errors.projectType ? "inquiry-project-type-error" : undefined
          }
        >
          <option value="" className="bg-brand-navy text-brand-cream">
            Choose the closest fit
          </option>
          {inquiryProjectTypes.map((projectType) => (
            <option
              key={projectType}
              value={projectType}
              className="bg-brand-navy text-brand-cream"
            >
              {projectType}
            </option>
          ))}
        </select>
        {errors.projectType ? (
          <p id="inquiry-project-type-error" className={errorClassName}>
            {errors.projectType}
          </p>
        ) : null}
      </div>

      <div>
        <label className={labelClassName} htmlFor="inquiry-message">
          What should we look at?
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          required
          minLength={20}
          maxLength={1200}
          rows={5}
          value={values.message}
          onChange={(event) => updateValue("message", event.target.value)}
          className={`${inputClassName} min-h-36 resize-y py-4 leading-6`}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "inquiry-message-error" : undefined
          }
        />
        {errors.message ? (
          <p id="inquiry-message-error" className={errorClassName}>
            {errors.message}
          </p>
        ) : null}
      </div>

      <div>
        <label className="flex gap-3 text-sm leading-6 text-brand-cream/72">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(event) => updateValue("consent", event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-white/20 bg-white/10 accent-brand-cream"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={
              errors.consent ? "inquiry-consent-error" : undefined
            }
          />
          <span>
            AGENTEC can use these details to respond to this inquiry.
          </span>
        </label>
        {errors.consent ? (
          <p id="inquiry-consent-error" className={errorClassName}>
            {errors.consent}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-cream px-6 text-sm font-semibold text-brand-navy transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white disabled:translate-y-0 disabled:cursor-wait disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>
        {notice ? (
          <p className="text-sm leading-6 text-brand-cream/68" role="alert">
            {notice}
          </p>
        ) : null}
      </div>
    </form>
  );
}
